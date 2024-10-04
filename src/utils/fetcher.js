export const fetcher = async (...args) => {
  const response = await fetch(...args);

  if (response.ok) {
    const responseJson = await response.json();
    
    if (responseJson['@type'] === 'hydra:Collection') {
      return {
        members: responseJson['hydra:member'],
        context: {
          total: responseJson['hydra:totalItems'],
          first: responseJson['hydra:view'] ? responseJson['hydra:view']['hydra:first'] : null,
          last: responseJson['hydra:view'] ? responseJson['hydra:view']['hydra:last'] : null,
          previous: responseJson['hydra:view'] ? responseJson['hydra:view']['hydra:previous'] : null,
          next: responseJson['hydra:view'] ? responseJson['hydra:view']['hydra:next'] : null,
        }
      };
    }

    return responseJson;
  }

  return response;
}
