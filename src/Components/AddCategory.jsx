import Header from "./Header";
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddCategory({ categories = [], setCategories }) {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryIndex, setCategoryIndex] = useState(null); // To determine the index of the category being edited
  const navigate = useNavigate();
  const location = useLocation();

  // Extract state from location
  const { isEdit, categoryTitle: initialTitle, categoryDescription: initialDescription, index } = location.state || {};

  useEffect(() => {
    if (isEdit) {
      setCategoryTitle(initialTitle || ""); // Fill category title
      setCategoryDescription(initialDescription || ""); // Fill category description
      setCategoryIndex(index); // Save the index for editing
    }
  }, [isEdit, initialTitle, initialDescription, index]);

  function handleSaveCategory(e) {
    e.preventDefault();
  
    if (categoryTitle.trim() === "" || categoryDescription.trim() === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "يرجى إدخال عنوان الفئة ووصفها",
        showConfirmButton: true
      });
      return;
    }
  
    // تحقق إذا كانت الفئات تجاوزت الحد الأقصى
    if (!isEdit && categories.length >= 3) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "لا يمكن إضافة أكثر من 10 فئات!",
        showConfirmButton: true
      });
      return;
    }
  
    const newCategory = {
      title: categoryTitle,
      description: categoryDescription,
    };
  
    if (isEdit) {
      // تعديل فئة موجودة
      setCategories((prevCategories) => {
        return prevCategories.map((category, idx) =>
          idx === categoryIndex ? newCategory : category
        );
      });
  
      Swal.fire({
        position: "center",
        icon: "success",
        title: "تم تعديل الفئة بنجاح",
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        navigate('/homeadmin');
      });
    } else {
      // إضافة فئة جديدة
      setCategories((prevCategories) => [...prevCategories, newCategory]);
  
      Swal.fire({
        position: "center",
        icon: "success",
        title: "تمت إضافة الفئة بنجاح",
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        navigate('/homeadmin');
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
          <button onClick={handleSaveCategory} className="w-60 h-14 bg-header text-white text-4xl px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            {categoryIndex !== null ? "تعديل الفئة" : "إضافة فئة"}
            <i className="fa-solid fa-check border-2 border-white w-8 h-8 rounded-full text-xl "/>
          </button>
        </div>
      </section>
    </>
  );
}
