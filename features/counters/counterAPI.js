//función simulada para imitar la realización de una solicitud asíncrona de datos
export function fetchCount(amount = 1) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
  