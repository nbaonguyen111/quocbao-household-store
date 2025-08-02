module.exports = {

"[project]/src/app/tim-kiem/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TimKiemPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const brands = [
    "Panasonic",
    "LG",
    "Samsung",
    "Electrolux",
    "Sharp",
    "Aqua",
    "Toshiba",
    "Mitsubishi",
    "Daikin",
    "Hitachi"
];
const categories = [
    {
        id: "fridge",
        name: "Tủ lạnh"
    },
    {
        id: "washer",
        name: "Máy giặt"
    },
    {
        id: "tv",
        name: "Tivi"
    },
    {
        id: "ac",
        name: "Máy lạnh"
    },
    {
        id: "microwave",
        name: "Lò vi sóng"
    },
    {
        id: "fan",
        name: "Máy quạt"
    }
];
const products = [];
const categoryImages = {
    fridge: [
        "/images/samsung-inverter-307-lit-rb30n4190bu-sv-3-700x467.jpg",
        "/images/tu-lanh-aqua-inverter-550-lit-side-by-side-aqr-s612xa-wcb-1-638610691743611888-700x467.jpg",
        "/images/tu-lanh-toshiba-inverter-460-lit-gr-rs600wi-pmv-37-sg-5-638762656897233644-700x467.jpg",
        "/images/tu-lanh-toshiba-inverter-460-lit-gr-rs600wi-pmv-37-sg-5-638762656897233644-700x467.jpg"
    ],
    washer: [
        "/images/may-giat-hisense-13-kg-wtjh1313ub-638729316586456542-700x467.jpg",
        "/images/may-giat-lg-turbodrum-inverter-14-kg-t2514vbtb-1-638615584073916856-700x467.jpg",
        "/images/may-giat-say-aqua-inverter-15-kg-aqd-dh1500g-pp-2-700x467.jpg",
        "/images/may-giat-say-lg-inverter-giat-9-kg-say-5-kg-fb1209d5m-1-638828152482787931-700x467.jpg"
    ],
    tv: [
        "/images/google-tivi-aqua-32-inch-aqt32k85fx-1-638809320071060981-700x467.jpg",
        "/images/google-tivi-aqua-32-inch-aqt32k85fx-1-638809320071060981-700x467.jpg",
        "/images/google-tivi-sony-4k-55-inch-k-55s25vm2-1-638844792894979207-700x467.jpg",
        "/images/tivi-qned-lg-4k-55-inch-55qned80tsa-1-638696190691799179-700x467.jpg"
    ],
    ac: [
        "/images/daikin-inverter-1-hp-ftky25wmvmv-2-700x467.jpg",
        "/images/samsung-inverter-1-hp-ar10dyhzawknsv-1-700x467.jpg",
        "/images/lg-inverter-1-5-hp-idc12m1-1-638715205752182656-700x467.jpg",
        "/images/panasonic-inverter-1-hp-cu-cs-pu9akh-8top-tskt2-700x467.jpg",
        "/images/panasonic-inverter-1-hp-cu-cs-pu9akh-8top-tskt2-700x467.jpg"
    ],
    microwave: [
        "/images/lo-vi-song-electrolux-emm20k22w-20-lit-1-700x467.jpg",
        "/images/lo-vi-song-samsung-ms20a3010al-sv-20-lit-1-700x467.jpg",
        "/images/lo-vi-song-samsung-ms23k3513as-sv-n-23-lit-2-2-700x467.jpg",
        "/images/toshiba-mwp-mm20p-bk-20-lit-2-700x467.jpg"
    ],
    fan: [
        "/images/qua-t-sa-c-dien-sunhouse-shd7223-1-700x467.jpg",
        "/images/lung-senko-l1638-1-700x467.jpg",
        "/images/ban-senko-b1612-1-700x467.jpg",
        "/images/ban-senko-b1213-1-700x467.jpg"
    ]
};
const priceRangeByCategory = {
    fridge: [
        5000000,
        25000000
    ],
    washer: [
        4000000,
        18000000
    ],
    tv: [
        3000000,
        40000000
    ],
    ac: [
        5000000,
        20000000
    ],
    microwave: [
        1000000,
        5000000
    ],
    fan: [
        400000,
        500000
    ]
};
categories.forEach((cat, catIdx)=>{
    for(let i = 1; i <= 40; i++){
        const brand = brands[Math.floor(Math.random() * brands.length)];
        const isNew = Math.random() > 0.5;
        const isHot = Math.random() > 0.5;
        const discount = [
            0,
            5,
            10,
            12,
            15,
            20
        ][Math.floor(Math.random() * 6)];
        // Random giá theo danh mục
        const [min, max] = priceRangeByCategory[cat.id];
        const price = Math.floor(Math.random() * (max - min + 1)) + min;
        const name = `${cat.name} ${brand} Model ${i}`;
        const images = [
            categoryImages[cat.id][(i - 1) % categoryImages[cat.id].length]
        ];
        const description = `${cat.name} thương hiệu ${brand}, model ${i}, nhiều tính năng tiện lợi.`;
        products.push({
            name,
            brand,
            isNew,
            isHot,
            discount,
            category: cat.id,
            price,
            images,
            description
        });
    }
});
// Lấy danh sách thương hiệu duy nhất
const uniqueBrands = Array.from(new Set(products.map((p)=>p.brand)));
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
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const keyword = searchParams.get("keyword") || "";
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(keyword);
    const [selectedBrand, setSelectedBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("hot");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSearchTerm(keyword);
        setCurrentPage(1); // Reset về trang 1 khi thay đổi từ khóa
    }, [
        keyword
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let filtered = products;
        // Lọc theo từ khóa
        if (searchTerm.trim()) {
            const lower = searchTerm.toLowerCase();
            filtered = filtered.filter((p)=>p.name.toLowerCase().includes(lower) || p.description.toLowerCase().includes(lower));
        }
        // Lọc theo thương hiệu
        if (selectedBrand !== "all") {
            filtered = filtered.filter((p)=>p.brand === selectedBrand);
        }
        // Sắp xếp
        switch(sortBy){
            case "hot":
                filtered = filtered.slice().sort((a, b)=>Number(b.isHot) - Number(a.isHot));
                break;
            case "discount":
                filtered = filtered.slice().sort((a, b)=>b.discount - a.discount);
                break;
            case "new":
                filtered = filtered.slice().sort((a, b)=>Number(b.isNew) - Number(a.isNew));
                break;
            case "price-asc":
                filtered = filtered.slice().sort((a, b)=>a.price - b.price);
                break;
            case "price-desc":
                filtered = filtered.slice().sort((a, b)=>b.price - a.price);
                break;
            default:
                break;
        }
        setResults(filtered);
        setCurrentPage(1); // Reset về trang 1 khi filter/sort thay đổi
    }, [
        searchTerm,
        selectedBrand,
        sortBy
    ]);
    // Phân trang
    const totalPages = Math.ceil(results.length / pageSize);
    const paginatedResults = results.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const handlePageChange = (page)=>{
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "80vh",
            background: "linear-gradient(135deg,#e3f0ff 0%,#f6f8fa 100%)",
            padding: "32px 0"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1200,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 18,
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedBrand,
                                onChange: (e)=>setSelectedBrand(e.target.value),
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
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "Tất cả thương hiệu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tim-kiem/page.jsx",
                                        lineNumber: 230,
                                        columnNumber: 8
                                    }, this),
                                    uniqueBrands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: brand,
                                            children: brand
                                        }, brand, false, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 232,
                                            columnNumber: 9
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/tim-kiem/page.jsx",
                                lineNumber: 213,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                children: sortOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: opt.value,
                                        children: [
                                            "Sắp xếp theo ",
                                            opt.label
                                        ]
                                    }, opt.value, true, {
                                        fileName: "[project]/src/app/tim-kiem/page.jsx",
                                        lineNumber: 255,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/tim-kiem/page.jsx",
                                lineNumber: 237,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/tim-kiem/page.jsx",
                        lineNumber: 212,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                    lineNumber: 198,
                    columnNumber: 5
                }, this),
                searchTerm.trim() === "" && selectedBrand === "all" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        color: "#888",
                        fontSize: 18
                    },
                    children: "Vui lòng nhập từ khóa hoặc chọn thương hiệu để tìm kiếm sản phẩm."
                }, void 0, false, {
                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                    lineNumber: 264,
                    columnNumber: 6
                }, this) : paginatedResults.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        color: "#d32f2f",
                        fontWeight: 500,
                        fontSize: 18
                    },
                    children: "Không tìm thấy sản phẩm phù hợp."
                }, void 0, false, {
                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                    lineNumber: 268,
                    columnNumber: 6
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                gap: 32
                            },
                            children: paginatedResults.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        p.isHot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 309,
                                            columnNumber: 11
                                        }, this),
                                        p.isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 328,
                                            columnNumber: 11
                                        }, this),
                                        p.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            lineNumber: 347,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: p.images[0],
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
                                            lineNumber: 365,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                            lineNumber: 379,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#555",
                                                fontSize: 15,
                                                marginBottom: 4
                                            },
                                            children: [
                                                "Thương hiệu: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: p.brand
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                                                    lineNumber: 391,
                                                    columnNumber: 24
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 390,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#d32f2f",
                                                fontWeight: 700,
                                                fontSize: 18,
                                                marginBottom: 8
                                            },
                                            children: [
                                                p.price.toLocaleString(),
                                                "₫"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 393,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#555",
                                                fontSize: 15,
                                                marginBottom: 18,
                                                textAlign: "center"
                                            },
                                            children: p.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                                            lineNumber: 403,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            lineNumber: 413,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/app/tim-kiem/page.jsx",
                                    lineNumber: 281,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                            lineNumber: 273,
                            columnNumber: 7
                        }, this),
                        totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                margin: "32px 0 0"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 441,
                                    columnNumber: 9
                                }, this),
                                Array.from({
                                    length: totalPages
                                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        lineNumber: 459,
                                        columnNumber: 10
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 477,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tim-kiem/page.jsx",
                            lineNumber: 440,
                            columnNumber: 8
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/tim-kiem/page.jsx",
            lineNumber: 196,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/tim-kiem/page.jsx",
        lineNumber: 189,
        columnNumber: 3
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_tim-kiem_page_jsx_9b342504._.js.map