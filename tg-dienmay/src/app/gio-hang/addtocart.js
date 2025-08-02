import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const addToCart = async (userId, product) => {
  try {
    const productRef = doc(db, "carts", userId, "items", product.id);
    const snapshot = await getDoc(productRef);

    const addQty = product.quantity || 1;

    if (snapshot.exists()) {
      const currentQty = snapshot.data().quantity || 1;
      await setDoc(productRef, {
        ...product,
        quantity: currentQty + addQty,
      });
    } else {
      await setDoc(productRef, {
        ...product,
        quantity: addQty,
      });
    }

    console.log("✅ Đã thêm sản phẩm vào giỏ");
  } catch (error) {
    console.error("❌ Lỗi khi thêm giỏ hàng:", error);
  }
};