
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const addToCart = async (userId, product) => {
  try {
    const productRef = doc(db, "carts", userId, "items", product.id);
    const snapshot = await getDoc(productRef);

    if (snapshot.exists()) {
      const currentQty = snapshot.data().quantity || 1;
      await setDoc(productRef, {
        ...product,
        quantity: currentQty + 1,
      });
    } else {
      await setDoc(productRef, {
        ...product,
        quantity: 1,
      });
    }

    console.log("✅ Đã thêm sản phẩm vào giỏ");
  } catch (error) {
    console.error("❌ Lỗi khi thêm giỏ hàng:", error);
  }
};
