import Header from "./Header";
import Footer from "./Footer";
import SectionPhotosAdmin from "./SectionPhotosAdmin";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function HomeAdmin({ categories, setCategories, setCurrentCategory }) {
  
  function handleCategoryClick(category) {
    setCurrentCategory(category);
    localStorage.setItem("currentCategory", JSON.stringify(category));
  }

  function deleteCategory(event, index) {
    event.stopPropagation(); // لمنع انتقال الحدث إلى العنصر الأساسي
    Swal.fire({
      title: "تنبيه",
      text: "سوف يتم حذف جميع المرفقات الخاصة في البند عند حذفه ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "حذف",
      cancelButtonText: "تراجع"
    }).then((result) => {
      if (result.isConfirmed) {
        // حذف الفئة من قائمة الفئات
        const updatedCategories = categories.filter((_, catIndex) => catIndex !== index);
        setCategories(updatedCategories); // تحديث الحالة في المكون الأب

        Swal.fire({
          title: "تم الحذف بنجاح",
          text: "تم حذف الفئة بنجاح",
          icon: "success"
        });
      }
    });
  }

  return (
    <>
      <Header />
      <SectionPhotosAdmin />
      <section>
        <div className="flex justify-center mt-10">
          <button className="btn-add w-40 h-16 bg-header text-white text-3xl rounded-lg hover:opacity-90 transition-opacity">
            <Link to='/addcategory'>اضافة فئة</Link>
          </button>
        </div>
        <div className="add-category mt-4 flex justify-between">
          <div className="right-category mt-8" style={{ width: '35%' }}>
            {categories
              .filter((_, index) => index % 2 === 0)
              .map((category, index) => (
                <div key={index} onClick={() => handleCategoryClick(category)} className="add-right w-72 h-20 add1 bg-greenYellow mt-2 rounded-3xl mr-12 relative text-white text-center text-lg p-2  max-lg:text-base">
                  <i onClick={(event) => deleteCategory(event, index)} className="fa-solid fa-trash delete-icon cursor-pointer ml-4"/>
                  <Link to='/categorytitleadmin' state={{ title: category.title, description: category.description }}>
                    {category.title}
                  </Link>
                  <i className="fa-solid fa-pen-to-square modify-icon cursor-pointer "/>
                </div>
              ))}
          </div>
          <div className="center-category grid grid-cols-1 justify-items-center mb-20">
            <div style={{ width: '70%' }} className="mt-20 mb-4">
              <h1 className="text-3xl text-center">تقرير نماذج التعلم الالكتروني الكامل عن بعد والمدمج 2024</h1>
            </div>
            <div style={{ marginTop: '-4rem' }}>
              <img src="/src/images/packge-box.png" alt="" />
            </div>
          </div>
          <div className="left-category mt-4" style={{ width: '35%', marginLeft: '-5%' }}>
            {categories
              .filter((_, index) => index % 2 !== 0)
              .map((category, index) => (
                <div key={index} onClick={() => handleCategoryClick(category)} className="add-left w-72 h-20 add2 bg-greenYellow mt-6 mr-16 rounded-3xl relative text-white text-center text-lg p-2  max-lg:text-base ">
                  <i onClick={(event) => deleteCategory(event, index)} className="fa-solid fa-trash delete-icon cursor-pointer ml-4"/>
                  <Link to='/categorytitleadmin' state={{ title: category.title, description: category.description }}>
                    {category.title}
                  </Link>
                  <i className="fa-solid fa-pen-to-square modify-icon cursor-pointer "/>
                </div>
              ))}
          </div>
        </div>
        <div className="add-category-mobile hidden mt-24 justify-between">
          <div className="text-center px-8">
            <div>
              <h1 className="text-3xl">تقرير نماذج التعلم الالكتروني الكامل عن بعد والمدمج 2024</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-items-center mt-12">
            {categories.map((category, index) => (
              <div key={index} onClick={() => handleCategoryClick(category)} className="w-72 h-20 add2 bg-greenYellow mt-4 rounded-3xl relative text-white text-center text-lg p-2 max-lg:text-base">
                <i onClick={(event) => deleteCategory(event, index)} className="fa-solid fa-trash delete-icon cursor-pointer ml-4"/>
                <Link to='/categorytitleadmin' state={{ title: category.title, description: category.description }}>
                  {category.title}
                </Link>
                <i className="fa-solid fa-pen-to-square modify-icon cursor-pointer "/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
