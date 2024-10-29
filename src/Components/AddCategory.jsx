import Header from "./Header";
import Swal from 'sweetalert2';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCategory({ addCategory }) {
  const [categoryTitle, setCategoryTitle] = useState("");
  const navigate = useNavigate();

  function handleAddCategory() {
    if (categoryTitle.trim() === "") {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "يرجى إدخال عنوان الفئة",
        showConfirmButton: true
      });
      return;
    }
   
    addCategory(categoryTitle); // إضافة العنوان إلى الحالة الرئيسية
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "تم إضافة الفئة بنجاح",
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
      navigate("/homeadmin"); // نقل المستخدم بعد الإضافة
    });
  }

  return (
    <>
      <Header />
      <section className="add-category-admin mt-20 mb-60 relative">
        <div className="block">
        <label style={{marginRight:'10%'}} className="text-4xl font-bold block mb-4 " htmlFor="addCategory">عنوان الفئة :</label>
        <input id="addCategory" style={{width:'80%',marginLeft:'10%',marginRight:'10%'}} name="" className="w-72 h-12 p-4 border border-input outline-slate-400 rounded-lg" type="text"
         value={categoryTitle}
         onChange={(e) => setCategoryTitle(e.target.value)} 
        />
        </div>
        <div className="block mt-10">
        <label style={{marginRight:'10%'}} className="text-4xl font-bold block mb-4 " htmlFor="addCategory">عنوان الفئة :</label>
        <input id="addCategory" style={{width:'80%',marginLeft:'10%',marginRight:'10%'}} name="" className="w-72 h-40 p-4 border border-input outline-slate-400 rounded-lg" type="text"
    
        />
        </div>
        <div className="btn-add-category mt-10">
          <button onClick={handleAddCategory} className="w-60 h-14 bg-header text-white text-4xl px-4 py-2 rounded-lg">
            إضافة فئة
          </button>
        </div>
      </section>
    </>
  );
}


/*             value={categoryTitle}
            onChange={(e) => setCategoryTitle(e.target.value)} */