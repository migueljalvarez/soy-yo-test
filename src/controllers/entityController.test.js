import request from "supertest";
import { app } from "../app";

describe("Evalua el status code de la respuesta", () => {
  test("Responde con status code 200 cuando los parametros se encuentran en el rango de busqueda", async () => {
    const res = await request(app).post("/entities/filter").send({
      startId: 1,
      endId: 2
    });
    expect(res.statusCode).toEqual(200);
  });

  test("Responde con status code 400 cuando el parametro inicial es mayor que el segundo parametro", async () => {
    const res = await request(app).post("/entities/filter").send({
      startId: 2,
      endId: 1
    });
    expect(res.statusCode).toEqual(400);
  });

  test("Responde con status code 400 cuando los parametros no son numeros", async () => {
    const res = await request(app).post("/entities/filter").send({
      startId: "a",
      endId: "b"
    });

    expect(res.statusCode).toEqual(400);
  });

  test("Responde con status code 404 cuando alguno de los parametros no se encuentra en el rango los resultados de busqueda", async () => {
    const res = await request(app).post("/entities/filter").send({
      startId: 18,
      endId: 20
    });
    expect(res.statusCode).toEqual(404);
  });
});
