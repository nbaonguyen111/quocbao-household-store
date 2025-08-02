(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/firebase/firebase.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Import the functions you need from the SDKs you need
__turbopack_context__.s({
    "auth": (()=>auth),
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export p as getAuth>");
;
;
;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyFjagBa8N0zUvqBFMC4nt1NtXKbGVezM",
    authDomain: "household-store-d5cb9.firebaseapp.com",
    projectId: "household-store-d5cb9",
    storageBucket: "household-store-d5cb9.firebasestorage.app",
    messagingSenderId: "775179695282",
    appId: "1:775179695282:web:54028eeb3a20fa441cc5ab",
    measurementId: "G-SLB6P205DL"
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/tim-kiem/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TimKiemPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firebase.js [app-client] (ecmascript)"); // Đảm bảo alias @ trỏ đúng src
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const sortOptions = [
    {
        value: "hot",
        label: "Nổi bật"
    },
    {
        value: "discount",
        label: "Giảm giá"
    },
    {
        value: "new",
        label: "Mới"
    },
    {
        value: "price-asc",
        label: "Giá tăng dần"
    },
    {
        value: "price-desc",
        label: "Giá giảm dần"
    }
];
const pageSize = 8; // Số sản phẩm mỗi trang
function TimKiemPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const keyword = searchParams.get("keyword") || "";
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(keyword);
    const [selectedBrand, setSelectedBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hot");
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Đồng bộ searchTerm với keyword trên URL mỗi khi keyword thay đổi
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimKiemPage.useEffect": ()=>{
            setSearchTerm(keyword);
        }
    }["TimKiemPage.useEffect"], [
        keyword
    ]);
    // Lấy dữ liệu từ Firestore
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimKiemPage.useEffect": ()=>{
            async function fetchProducts() {
                setLoading(true);
                setError("");
                try {
                    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "products"));
                    const data = [];
                    querySnapshot.forEach({
                        "TimKiemPage.useEffect.fetchProducts": (doc)=>{
                            data.push({
                                id: doc.id,
                                ...doc.data()
                            });
                        }
                    }["TimKiemPage.useEffect.fetchProducts"]);
                    setProducts(data);
                } catch (err) {
                    setError("Không thể tải dữ liệu sản phẩm. Vui lòng thử lại sau.");
                }
                setLoading(false);
            }
            fetchProducts();
        }
    }["TimKiemPage.useEffect"], []);
    // Lấy danh sách thương hiệu duy nhất
    const uniqueBrands = Array.from(new Set(products.map((p)=>p.brand)));
    // Lọc, sắp xếp, tìm kiếm
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimKiemPage.useEffect": ()=>{
            let filtered = products;
            // Lọc theo từ khóa (không phân biệt dấu)
            if (searchTerm.trim()) {
                const lower = removeVietnameseTones(searchTerm.trim().toLowerCase());
                filtered = filtered.filter({
                    "TimKiemPage.useEffect": (p)=>removeVietnameseTones(p.name?.toLowerCase() || "").includes(lower) || removeVietnameseTones(p.description?.toLowerCase() || "").includes(lower)
                }["TimKiemPage.useEffect"]);
            }
            // Lọc theo thương hiệu
            if (selectedBrand !== "all") {
                filtered = filtered.filter({
                    "TimKiemPage.useEffect": (p)=>p.brand === selectedBrand
                }["TimKiemPage.useEffect"]);
            }
            // Sắp xếp
            switch(sortBy){
                case "hot":
                    filtered = filtered.slice().sort({
                        "TimKiemPage.useEffect": (a, b)=>Number(b.isHot) - Number(a.isHot)
                    }["TimKiemPage.useEffect"]);
                    break;
                case "discount":
                    filtered = filtered.slice().sort({
                        "TimKiemPage.useEffect": (a, b)=>(b.discount || 0) - (a.discount || 0)
                    }["TimKiemPage.useEffect"]);
                    break;
                case "new":
                    filtered = filtered.slice().sort({
                        "TimKiemPage.useEffect": (a, b)=>Number(b.isNew) - Number(a.isNew)
                    }["TimKiemPage.useEffect"]);
                    break;
                case "price-asc":
                    filtered = filtered.slice().sort({
                        "TimKiemPage.useEffect": (a, b)=>(a.price || 0) - (b.price || 0)
                    }["TimKiemPage.useEffect"]);
                    break;
                case "price-desc":
                    filtered = filtered.slice().sort({
                        "TimKiemPage.useEffect": (a, b)=>(b.price || 0) - (a.price || 0)
                    }["TimKiemPage.useEffect"]);
                    break;
                default:
                    break;
            }
            setResults(filtered);
            setCurrentPage(1); // Reset về trang 1 khi filter/sort thay đổi
        }
    }["TimKiemPage.useEffect"], [
        searchTerm,
        selectedBrand,
        sortBy,
        products
    ]);
    // Phân trang
    const totalPages = Math.ceil(results.length / pageSize);
    const paginatedResults = results.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const handlePageChange = (page)=>{
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    function removeVietnameseTones(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "80vh",
            background: "linear-gradient(135deg,#e3f0ff 0%,#f6f8fa 100%)",
            padding: "32px 0"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1200,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 20,
                        alignItems: "center",
                        marginBottom: 32,
                        justifyContent: "space-between",
                        background: "#fff",
                        borderRadius: 18,
                        boxShadow: "0 2px 12px #0001",
                        padding: "18px 24px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 18,
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedBrand,
                                onChange: (e)=>setSelectedBrand(e.target.value),
                                disabled: loading,
                                style: {
                                    padding: "10px 18px",
                                    borderRadius: 22,
                                    border: "1.5px solid #1976d2",
                                    fontSize: 16,
                                    background: "#f5faff",
                                    minWidth: 150,
                                    color: "#1a237e",
                                    fontWeight: 500,
                                    boxShadow: "0 1px 4px #0001",
                                    outline: "none",
                                    transition: "border 0.2s",
                                    opacity: loading ? 0.6 : 1,
                                    cursor: loading ? "not-allowed" : "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "Tất cả thương hiệu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tim-kiem/page.jsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    uniqueBrands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: brand,
                                            children: brand
                                        }, brand, false, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/tim-kiem/page.jsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: sortBy,
                                onChange: (e)=>setSortBy(e.target.value),
                                style: {
                                    padding: "10px 18px",
                                    borderRadius: 22,
                                    border: "1.5px solid #1976d2",
                                    fontSize: 16,
                                    background: "#f5faff",
                                    minWidth: 150,
                                    color: "#1a237e",
                                    fontWeight: 500,
                                    boxShadow: "0 1px 4px #0001",
                                    outline: "none",
                                    transition: "border 0.2s"
                                },
                                children: sortOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: opt.value,
                                        children: [
                                            "Sắp xếp theo ",
                                            opt.label
                                        ]
                                    }, opt.value, true, {
                                        fileName: "[project]/src/app/tim-kiem/page.jsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/tim-kiem/page.jsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/tim-kiem/page.jsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        color: "#1976d2",
                        fontSize: 20,
                        padding: 40
                    },
                    children: "Đang tải dữ liệu sản phẩm..."
                }, void 0, false, {
                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                    lineNumber: 196,
                    columnNumber: 11
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        color: "#d32f2f",
                        fontWeight: 500,
                        fontSize: 18
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                    lineNumber: 200,
                    columnNumber: 11
                }, this) : searchTerm.trim() === "" && selectedBrand === "all" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        color: "#888",
                        fontSize: 18
                    },
                    children: "Vui lòng nhập từ khóa hoặc chọn thương hiệu để tìm kiếm sản phẩm."
                }, void 0, false, {
                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                    lineNumber: 204,
                    columnNumber: 11
                }, this) : paginatedResults.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        color: "#d32f2f",
                        fontWeight: 500,
                        fontSize: 18
                    },
                    children: "Không tìm thấy sản phẩm phù hợp."
                }, void 0, false, {
                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                gap: 32
                            },
                            children: paginatedResults.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "#fff",
                                        borderRadius: 20,
                                        boxShadow: "0 4px 18px #0002",
                                        padding: 20,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        transition: "box-shadow 0.2s, transform 0.2s",
                                        minHeight: 390,
                                        position: "relative",
                                        border: "1.5px solid #e3eafc",
                                        cursor: "pointer",
                                        overflow: "hidden"
                                    },
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.boxShadow = "0 8px 32px #1976d233";
                                        e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.boxShadow = "0 4px 18px #0002";
                                        e.currentTarget.style.transform = "none";
                                    },
                                    children: [
                                        p.isHot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: "absolute",
                                                top: 14,
                                                left: 14,
                                                background: "linear-gradient(90deg,#ff9800 60%,#ffd54f 100%)",
                                                color: "#fff",
                                                borderRadius: 8,
                                                padding: "3px 12px",
                                                fontSize: 13,
                                                fontWeight: 700,
                                                letterSpacing: 1,
                                                boxShadow: "0 2px 8px #ff980033"
                                            },
                                            children: "NỔI BẬT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 249,
                                            columnNumber: 21
                                        }, this),
                                        p.isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: "absolute",
                                                top: 14,
                                                right: 14,
                                                background: "linear-gradient(90deg,#1976d2 60%,#64b5f6 100%)",
                                                color: "#fff",
                                                borderRadius: 8,
                                                padding: "3px 12px",
                                                fontSize: 13,
                                                fontWeight: 700,
                                                letterSpacing: 1,
                                                boxShadow: "0 2px 8px #1976d233"
                                            },
                                            children: "MỚI"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 268,
                                            columnNumber: 21
                                        }, this),
                                        p.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: "absolute",
                                                bottom: 14,
                                                left: 14,
                                                background: "linear-gradient(90deg,#d32f2f 60%,#ff8a65 100%)",
                                                color: "#fff",
                                                borderRadius: 8,
                                                padding: "3px 12px",
                                                fontSize: 13,
                                                fontWeight: 700,
                                                letterSpacing: 1,
                                                boxShadow: "0 2px 8px #d32f2f33"
                                            },
                                            children: [
                                                "GIẢM ",
                                                p.discount,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 287,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: Array.isArray(p.images) ? p.images[0] : p.imageUrl,
                                            alt: p.name,
                                            style: {
                                                width: "100%",
                                                height: 180,
                                                objectFit: "contain",
                                                borderRadius: 14,
                                                marginBottom: 14,
                                                background: "#f9f9f9",
                                                boxShadow: "0 2px 8px #1976d211",
                                                display: "block"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 305,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: 19,
                                                color: "#1976d2",
                                                margin: "10px 0 6px",
                                                fontWeight: 700,
                                                textAlign: "center"
                                            },
                                            children: p.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 319,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#555",
                                                fontSize: 15,
                                                marginBottom: 4
                                            },
                                            children: [
                                                "Thương hiệu: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: p.brand
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                                                    lineNumber: 331,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 330,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#d32f2f",
                                                fontWeight: 700,
                                                fontSize: 18,
                                                marginBottom: 8
                                            },
                                            children: [
                                                p.price?.toLocaleString(),
                                                "₫"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 333,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#555",
                                                fontSize: 15,
                                                marginBottom: 18,
                                                textAlign: "center"
                                            },
                                            children: p.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 343,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                background: "linear-gradient(90deg,#1976d2 60%,#64b5f6 100%)",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: 20,
                                                padding: "10px 28px",
                                                fontWeight: 600,
                                                cursor: "pointer",
                                                fontSize: 16,
                                                marginTop: "auto",
                                                boxShadow: "0 2px 8px #1976d233",
                                                transition: "background 0.2s"
                                            },
                                            onMouseOver: (e)=>e.currentTarget.style.background = "linear-gradient(90deg,#1565c0 60%,#42a5f5 100%)",
                                            onMouseOut: (e)=>e.currentTarget.style.background = "linear-gradient(90deg,#1976d2 60%,#64b5f6 100%)",
                                            onClick: ()=>alert("Chức năng xem chi tiết sẽ được bổ sung!"),
                                            children: "Xem chi tiết"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 353,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, p.id || idx, true, {
                                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                                    lineNumber: 221,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this),
                        totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                margin: "32px 0 0"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handlePageChange(currentPage - 1),
                                    disabled: currentPage === 1,
                                    style: {
                                        padding: "8px 16px",
                                        margin: "0 6px",
                                        borderRadius: 8,
                                        border: "1px solid #1976d2",
                                        background: currentPage === 1 ? "#e3eafc" : "#fff",
                                        color: "#1976d2",
                                        cursor: currentPage === 1 ? "not-allowed" : "pointer",
                                        fontWeight: 600,
                                        transition: "background 0.2s"
                                    },
                                    children: "<"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                                    lineNumber: 381,
                                    columnNumber: 17
                                }, this),
                                Array.from({
                                    length: totalPages
                                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handlePageChange(i + 1),
                                        style: {
                                            padding: "8px 16px",
                                            margin: "0 4px",
                                            borderRadius: 8,
                                            border: "1px solid #1976d2",
                                            background: currentPage === i + 1 ? "#1976d2" : "#fff",
                                            color: currentPage === i + 1 ? "#fff" : "#1976d2",
                                            cursor: "pointer",
                                            fontWeight: 600,
                                            transition: "background 0.2s"
                                        },
                                        children: i + 1
                                    }, i + 1, false, {
                                        fileName: "[project]/src/app/tim-kiem/page.jsx",
                                        lineNumber: 399,
                                        columnNumber: 19
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handlePageChange(currentPage + 1),
                                    disabled: currentPage === totalPages,
                                    style: {
                                        padding: "8px 16px",
                                        margin: "0 6px",
                                        borderRadius: 8,
                                        border: "1px solid #1976d2",
                                        background: currentPage === totalPages ? "#e3eafc" : "#fff",
                                        color: "#1976d2",
                                        cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                                        fontWeight: 600,
                                        transition: "background 0.2s"
                                    },
                                    children: ">"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                                    lineNumber: 417,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                            lineNumber: 380,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/tim-kiem/page.jsx",
            lineNumber: 125,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/tim-kiem/page.jsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(TimKiemPage, "kS9/+Akba9os+qUDivkQIxqmTAw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = TimKiemPage;
var _c;
__turbopack_context__.k.register(_c, "TimKiemPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_58a52cea._.js.map