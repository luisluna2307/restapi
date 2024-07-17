require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_API);
/* Referencia al módulo swagger-ui-express */
const swaggerUi = require("swagger-ui-express");
/* Referencia al archivo con la descripción */
const swaggerFile = require("./swagger_output.json");

admin.initializeApp({
<<<<<<< HEAD
  credential: admin.credential.cert(serviceAccount),
=======
    credential: admin.credential.cert(serviceAccount),
>>>>>>> d14b19b24b2a9a85253612ee02d220ce686e29a6
});

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

/* Ruta Base -> Documentación */
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/api", require("./routes/api"));

app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`Server is running on port ${PORT}`);
});
=======
    console.log(`Server is running on port ${PORT}`);
});
>>>>>>> d14b19b24b2a9a85253612ee02d220ce686e29a6
