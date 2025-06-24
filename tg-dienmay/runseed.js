// runseed.js
import { seedAll } from "./src/firebase/seeddata.js";

seedAll().catch((err) => {
  console.error("❌ Seed thất bại:", err);
});
