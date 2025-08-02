(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/admin/quan-tri-vien/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>QTV)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/layout.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function QTV() {
    _s();
    const { currentUser, permissions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdmin"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const pageSize = 8;
    const [showEditModal, setShowEditModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editAdmin, setEditAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        role: ''
    });
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDetailModal, setShowDetailModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [detailAdmin, setDetailAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lockLoading, setLockLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [addForm, setAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        role: 'admin'
    });
    const [adding, setAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QTV.useEffect": ()=>{
            const fetchData = {
                "QTV.useEffect.fetchData": async ()=>{
                    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "adminUsers"));
                    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
                    const items = querySnapshot.docs.map({
                        "QTV.useEffect.fetchData.items": (doc)=>({
                                id: doc.id,
                                ...doc.data()
                            })
                    }["QTV.useEffect.fetchData.items"]);
                    setData(items);
                }
            }["QTV.useEffect.fetchData"];
            fetchData();
        }
    }["QTV.useEffect"], []);
    const totalPages = Math.ceil(data.length / pageSize);
    const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const handlePageChange = (page)=>{
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    const handleEdit = (admin)=>{
        // Kiểm tra quyền chỉnh sửa
        if (!permissions.canEditAdmins) {
            alert("Bạn không có quyền chỉnh sửa admin!");
            return;
        }
        // Admin không thể sửa superadmin
        if (currentUser.role === 'admin' && admin.role === 'superadmin') {
            alert("Bạn không thể chỉnh sửa tài khoản Super Admin!");
            return;
        }
        setEditAdmin(admin);
        setEditForm({
            name: admin.name || '',
            email: admin.email || '',
            role: admin.role || ''
        });
        setShowEditModal(true);
    };
    const handleDelete = async (id)=>{
        // Kiểm tra quyền xóa
        if (!permissions.canDeleteAdmins) {
            alert("Bạn không có quyền xóa admin!");
            return;
        }
        const admin = data.find((u)=>u.id === id);
        // Không thể xóa chính mình
        if (admin.id === currentUser.uid) {
            alert("Bạn không thể xóa tài khoản của chính mình!");
            return;
        }
        // Admin không thể xóa superadmin
        if (currentUser.role === 'admin' && admin.role === 'superadmin') {
            alert("Bạn không thể xóa tài khoản Super Admin!");
            return;
        }
        if (window.confirm(`Bạn chắc chắn muốn xóa "${admin.name}" ?`)) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "adminUsers", id));
                setData((prev)=>prev.filter((u)=>u.id !== id));
            } catch (error) {
                alert("Lỗi khi xóa admin!");
            }
        }
    };
    const handleCloseModal = ()=>{
        setShowEditModal(false);
        setEditAdmin(null);
    };
    const handleSave = async ()=>{
        if (!editAdmin) return;
        // Kiểm tra quyền chỉnh sửa
        if (!permissions.canEditAdmins) {
            alert("Bạn không có quyền chỉnh sửa admin!");
            return;
        }
        setSaving(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "adminUsers", editAdmin.id), {
                name: editForm.name,
                email: editForm.email,
                role: editForm.role
            });
            setData((prev)=>prev.map((u)=>u.id === editAdmin.id ? {
                        ...u,
                        ...editForm
                    } : u));
            setShowEditModal(false);
            setEditAdmin(null);
        } catch (e) {
            alert("Lỗi khi lưu chỉnh sửa!");
        }
        setSaving(false);
    };
    const handleShowDetail = (admin)=>{
        setDetailAdmin(admin);
        setShowDetailModal(true);
    };
    const handleCloseDetail = ()=>{
        setShowDetailModal(false);
        setDetailAdmin(null);
    };
    // Hàm kiểm tra có thể chỉnh sửa admin này không
    const canEditThisAdmin = (admin)=>{
        if (!permissions.canEditAdmins) return false;
        if (currentUser.role === 'admin' && admin.role === 'superadmin') return false;
        return true;
    };
    // Hàm kiểm tra có thể xóa admin này không
    const canDeleteThisAdmin = (admin)=>{
        if (!permissions.canDeleteAdmins) return false;
        if (admin.id === currentUser.uid) return false;
        if (currentUser.role === 'admin' && admin.role === 'superadmin') return false;
        return true;
    };
    // Hàm thêm admin mới
    const handleAddAdmin = async ()=>{
        if (!permissions.canManageAdmins) {
            alert("Bạn không có quyền thêm admin!");
            return;
        }
        if (!addForm.name || !addForm.email) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        setAdding(true);
        try {
            const newAdmin = {
                name: addForm.name,
                email: addForm.email,
                role: addForm.role,
                createdAt: new Date()
            };
            const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "adminUsers"), newAdmin);
            setData((prev)=>[
                    ...prev,
                    {
                        id: docRef.id,
                        ...newAdmin
                    }
                ]);
            setShowAddModal(false);
            setAddForm({
                name: '',
                email: '',
                role: 'admin'
            });
            alert("Thêm admin thành công!");
        } catch (error) {
            alert("Lỗi khi thêm admin!");
        }
        setAdding(false);
    };
    const handleCloseAddModal = ()=>{
        setShowAddModal(false);
        setAddForm({
            name: '',
            email: '',
            role: 'admin'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl text-black font-bold",
                            children: "Quản lý Admin"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                            lineNumber: 202,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "Vai trò hiện tại: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: currentUser?.role
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                            lineNumber: 205,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, this),
                                permissions.canManageAdmins && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600",
                                    onClick: ()=>setShowAddModal(true),
                                    children: "Thêm Admin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                    lineNumber: 208,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                            lineNumber: 203,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                    lineNumber: 201,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-full text-gray-500 rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border px-2 py-1",
                                            children: "#ID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                            lineNumber: 221,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border px-2 py-1",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                            lineNumber: 222,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border px-2 py-1",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                            lineNumber: 223,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border px-2 py-1",
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                            lineNumber: 224,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border px-2 py-1",
                                            children: "Action"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                            lineNumber: 225,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                    lineNumber: 220,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 219,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: paginatedData.map((u, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: `${idx % 2 === 0 ? "bg-white" : "bg-gray-300"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " px-2 py-1 text-center",
                                                children: (currentPage - 1) * pageSize + idx + 1
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 231,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " px-2 py-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-blue-600 underline hover:text-blue-800",
                                                    onClick: ()=>handleShowDetail(u),
                                                    children: u.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                    lineNumber: 233,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 232,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " px-2 py-1",
                                                children: u.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 235,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " px-2 py-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-1 rounded text-xs font-semibold ${u.role === 'superadmin' ? 'bg-red-200 text-red-700' : u.role === 'admin' ? 'bg-blue-200 text-blue-700' : 'bg-green-200 text-green-700'}`,
                                                    children: u.role === 'superadmin' ? 'Super Admin' : u.role === 'admin' ? 'Admin' : 'Moderator'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                    lineNumber: 237,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 236,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " px-2 py-1 flex gap-2 justify-center",
                                                children: [
                                                    canEditThisAdmin(u) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600",
                                                        onClick: ()=>handleEdit(u),
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                        lineNumber: 247,
                                                        columnNumber: 45
                                                    }, this),
                                                    canDeleteThisAdmin(u) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600",
                                                        onClick: ()=>handleDelete(u.id),
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                        lineNumber: 255,
                                                        columnNumber: 45
                                                    }, this),
                                                    !canEditThisAdmin(u) && !canDeleteThisAdmin(u) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400 text-xs",
                                                        children: "Chỉ xem"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                        lineNumber: 263,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 245,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, u.id, true, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 230,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 228,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                        lineNumber: 218,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                    lineNumber: 217,
                    columnNumber: 17
                }, this),
                totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mt-4 gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handlePageChange(currentPage - 1),
                            disabled: currentPage === 1,
                            className: "px-3 py-1 border rounded bg-white text-black disabled:opacity-50",
                            children: "<"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                            lineNumber: 273,
                            columnNumber: 25
                        }, this),
                        Array.from({
                            length: totalPages
                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handlePageChange(i + 1),
                                className: `px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white text-black"}`,
                                children: i + 1
                            }, i + 1, false, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 279,
                                columnNumber: 29
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handlePageChange(currentPage + 1),
                            disabled: currentPage === totalPages,
                            className: "px-3 py-1 border rounded bg-white text-black disabled:opacity-50",
                            children: ">"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                            lineNumber: 287,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                    lineNumber: 272,
                    columnNumber: 21
                }, this),
                showEditModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 flex items-center justify-center bg-black text-yellow-400 bg-opacity-40 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-4 text-gray-700",
                                children: "Chỉnh sửa"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 300,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-gray-600 mb-1",
                                                children: "Tên"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 303,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "w-full border rounded px-3 py-2",
                                                value: editForm.name,
                                                onChange: (e)=>setEditForm((f)=>({
                                                            ...f,
                                                            name: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 304,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 302,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-gray-600 mb-1",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 307,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                className: "w-full border rounded px-3 py-2",
                                                value: editForm.email,
                                                onChange: (e)=>setEditForm((f)=>({
                                                            ...f,
                                                            email: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 308,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 306,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-gray-600 mb-1",
                                                children: "Vai trò"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 311,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full border rounded px-3 py-2",
                                                value: editForm.role,
                                                onChange: (e)=>setEditForm((f)=>({
                                                            ...f,
                                                            role: e.target.value
                                                        })),
                                                children: [
                                                    currentUser.role === 'superadmin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "superadmin",
                                                        children: "Super Admin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                        lineNumber: 314,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "admin",
                                                        children: "Admin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                        lineNumber: 316,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "moderator",
                                                        children: "Moderator"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                        lineNumber: 317,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 312,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 310,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 301,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400",
                                        onClick: handleCloseModal,
                                        disabled: saving,
                                        children: "Huỷ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 322,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600",
                                        onClick: handleSave,
                                        disabled: saving,
                                        children: saving ? "Đang lưu..." : "Lưu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 323,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 321,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl",
                                onClick: handleCloseModal,
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 325,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                        lineNumber: 299,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                    lineNumber: 298,
                    columnNumber: 21
                }, this),
                showDetailModal && detailAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-4 text-gray-700",
                                children: "Chi tiết"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 332,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: "Tên:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 334,
                                                columnNumber: 38
                                            }, this),
                                            " ",
                                            detailAdmin.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 334,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: "Email:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 335,
                                                columnNumber: 38
                                            }, this),
                                            " ",
                                            detailAdmin.email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 335,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: "Vai trò:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 336,
                                                columnNumber: 38
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `ml-2 px-2 py-1 rounded text-xs font-semibold ${detailAdmin.role === 'superadmin' ? 'bg-red-200 text-red-700' : detailAdmin.role === 'admin' ? 'bg-blue-200 text-blue-700' : 'bg-green-200 text-green-700'}`,
                                                children: detailAdmin.role === 'superadmin' ? 'Super Admin' : detailAdmin.role === 'admin' ? 'Admin' : 'Moderator'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 337,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 336,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: "Ngày tạo tài khoản:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 346,
                                                columnNumber: 37
                                            }, this),
                                            ' ',
                                            detailAdmin.createdAt?.toDate().toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 345,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 333,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400",
                                    onClick: handleCloseDetail,
                                    children: "Đóng"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                    lineNumber: 351,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 350,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl",
                                onClick: handleCloseDetail,
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 353,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                        lineNumber: 331,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                    lineNumber: 330,
                    columnNumber: 21
                }, this),
                showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-4 text-gray-700",
                                children: "Thêm Admin mới"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 361,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-gray-600 mb-1",
                                                children: "Tên"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 364,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "w-full border rounded px-3 py-2",
                                                value: addForm.name,
                                                onChange: (e)=>setAddForm((f)=>({
                                                            ...f,
                                                            name: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 365,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 363,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-gray-600 mb-1",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 373,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                className: "w-full border rounded px-3 py-2",
                                                value: addForm.email,
                                                onChange: (e)=>setAddForm((f)=>({
                                                            ...f,
                                                            email: e.target.value
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 374,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 372,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-gray-600 mb-1",
                                                children: "Vai trò"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 382,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full border rounded px-3 py-2",
                                                value: addForm.role,
                                                onChange: (e)=>setAddForm((f)=>({
                                                            ...f,
                                                            role: e.target.value
                                                        })),
                                                children: [
                                                    currentUser.role === 'superadmin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "superadmin",
                                                        children: "Super Admin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                        lineNumber: 389,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "admin",
                                                        children: "Admin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                        lineNumber: 391,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "moderator",
                                                        children: "Moderator"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                        lineNumber: 392,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                                lineNumber: 383,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 381,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 362,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400",
                                        onClick: handleCloseAddModal,
                                        disabled: adding,
                                        children: "Huỷ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 397,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600",
                                        onClick: handleAddAdmin,
                                        disabled: adding,
                                        children: adding ? "Đang thêm..." : "Thêm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                        lineNumber: 404,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 396,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl",
                                onClick: handleCloseAddModal,
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                                lineNumber: 412,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                        lineNumber: 360,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
                    lineNumber: 359,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
            lineNumber: 200,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/quan-tri-vien/page.jsx",
        lineNumber: 199,
        columnNumber: 9
    }, this);
}
_s(QTV, "mzhc5YDpqaTMJEOXCg1+PxhGlmk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$layout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdmin"]
    ];
});
_c = QTV;
var _c;
__turbopack_context__.k.register(_c, "QTV");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_admin_quan-tri-vien_page_jsx_7ae1c826._.js.map