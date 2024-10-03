export const fetcher = async (...args) => {
  const response = await fetch(...args);

  if (response.ok) {
    const responseJson = await response.json();
    if (responseJson['@type'] === 'hydra:Collection') {
      return {
        members: responseJson['hydra:member'],
        context: {
          total: responseJson['hydra:totalItems'],
          first: responseJson['hydra:view']['hydra:first'],
          last: responseJson['hydra:view']['hydra:last'],
          previous: responseJson['hydra:view']['hydra:previous'],
          next: responseJson['hydra:view']['hydra:next'],
        }
      };
    }

    return responseJson;
  }

  return response;
}
