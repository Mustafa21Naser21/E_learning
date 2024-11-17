import Header from "./Header";
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddCategory({ categories=[] , setCategories }) {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryIndex, setCategoryIndex] = useState(null); // To determine the index of the category being edited
  const navigate = useNavigate();
  const location = useLocation();

  // If there's a category to edit, populate the fields with the existing data
  useEffect(() => {
    if (location.state) {
      const { categoryTitle, categoryDescription, index } = location.state;
      setCategoryTitle(categoryTitle || ""); // Fill category title
      setCategoryDescription(categoryDescription || ""); // Fill category description
      setCategoryIndex(index); // Save the index for editing
    }
  }, [location.state]);
  
  function handleSaveCategory(e) {
    e.preventDefault();
  
    // تحقق من إدخال العنوان
    if (!categoryTitle.trim()) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "يرجى إدخال عنوان الفئة!",
      });
      return;
    }
  
    // تحقق إذا كانت الفئة جديدة أو تعديل فئة موجودة
    if (categoryIndex !== null) {
      // تعديل فئة موجودة
      const updatedCategories = categories.map((category, index) => {
        if (index === categoryIndex) {
          // إذا كانت هذه هي الفئة المعدلة، نقوم بتحديثها
          return { title: categoryTitle, description: categoryDescription };
        }
        // إذا كانت الفئة غير الفئة المعدلة، نعيدها كما هي
        return category;
      });
  
      // تأكد من عدم حذف الفئات الأخرى في حالة تعديل فئة
     console.log("قبل التعديل:", categories);
setCategories(updatedCategories); // تحديث الفئات
console.log("بعد التعديل:", updatedCategories);
 // تحديث الفئات بعد تعديل الفئة
  
      Swal.fire({
        position: "center",
        icon: "success",
        title: "تم تعديل الفئة بنجاح",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        navigate("/homeadmin"); // إعادة التوجيه بعد التعديل
      });
    } else {
      // إضافة فئة جديدة
      const newCategory = { title: categoryTitle, description: categoryDescription };
  
      // إضافة الفئة الجديدة إلى المصفوفة السابقة دون التأثير على الفئات القديمة
      setCategories((prevCategories) => {
        // إضافة الفئة الجديدة دون مسح الفئات القديمة
        return [...prevCategories, newCategory];
      });
  
      Swal.fire({
        position: "center",
        icon: "success",
        title: "تمت إضافة الفئة بنجاح",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        navigate("/homeadmin"); // إعادة التوجيه بعد الإضافة
      });
    }
  }
  
  
  
  
  
  

  return (
    <>
      <Header />
      <section className="add-category-admin mt-20 mb-60 relative">
        <div className="block">
          <label style={{ marginRight: '10%' }} className="text-4xl font-bold block mb-4" htmlFor="addCategoryTitle">عنوان الفئة:</label>
          <input 
            id="addCategoryTitle" 
            style={{ width: '80%', marginLeft: '10%', marginRight: '10%' }} 
            className="w-72 h-12 p-4 border border-input outline-slate-400 rounded-lg" 
            type="text"
            value={categoryTitle}
            onChange={(e) => setCategoryTitle(e.target.value)} 
          />
        </div>
        <div className="block mt-10">
          <label style={{ marginRight: '10%' }} className="text-4xl font-bold block mb-4" htmlFor="addCategoryDescription">وصف الفئة:</label>
          <textarea 
            id="addCategoryDescription" 
            style={{ width: '80%', marginLeft: '10%', marginRight: '10%' }} 
            className="w-72 h-40 p-4 border border-input outline-slate-400 rounded-lg" 
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
          />
        </div>
        <div className="btn-add-category mt-10">
          <button onClick={handleSaveCategory}  className="w-60 h-14 bg-header text-white text-4xl px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            {categoryIndex !== null ? "تعديل الفئة" : "إضافة فئة"} {/* Change text based on action */}
            <i className="fa-solid fa-check border-2 border-white w-8 h-8 rounded-full text-xl "/>
          </button>
        </div>
      </section>
    </>
  );
}


/*             value={categoryTitle}
            onChange={(e) => setCategoryTitle(e.target.value)} */