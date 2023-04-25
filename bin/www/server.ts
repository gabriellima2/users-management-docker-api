import { app } from "../../src/app";
import { PORT } from "./config/port";

app.listen(PORT, () => console.log(`🚀 Server ready at: ${PORT}`));
