import { filter } from "./entities";

describe("Evalua la respuesta del servicio", () => {
  test("Responde con un array cuando la respuesta contiene elementos que concuerdan con el filtro", async () => {
    expect(await filter(1, 5)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ entityId: 1 }),
        expect.objectContaining({ entityId: 5 })
      ])
    );
  });

  test("Responde con un error cuando el primer parametro es mayor que el segundo", async () => {
    try {
      await filter(5, 1);
    } catch (error) {
      expect(error.message).toEqual("Error en validación datos de entrada");
    }
  });
});
