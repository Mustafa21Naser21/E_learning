import Footer from "./Footer";
import Header from "./Header";
import SectionPhotos from "./SectionPhotos";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'



export default function HomeAdmin() {

    function deleteCategory(){
        Swal.fire({
            title: "تنبيه",
            text: "سوف يتم حذف جميع البنود الخاصة في الفئة عند حذفه ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "حذف",
            cancelButtonText: "تراجع"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "تم الحذف بنجاح",
                text: "تم",
                icon: "success"
              });
            }
          });
    }
  return (

    <>

    <Header />
    <SectionPhotos />
    <section>

        <div className="flex justify-center mt-10">
            <button  className="btn-add w-40 h-16 px-6 py-2 mb-10 bg-header text-white text-3xl  rounded-lg"> <Link to='/addcategory'>اضافة فئة</Link></button>

        </div>
        <div className="add-category mt-4   flex justify-between ">

            <div style={{width:'35%'}} className="right-category mt-10">

            <div className="add-left w-72 h-20 bg-greenYellow mt-6 rounded-3xl mr-12 relative add1">
                <h2 className="text-white text-center text-xl pt-4"><i onClick={deleteCategory} className="fa-solid fa-trash delete-icon"></i> <Link to='/categorytitleadmin'>الفئة الاولى</Link><i className="fa-solid fa-pen-to-square modify-icon"></i></h2>
            </div>
            <div className="add-left w-72 h-20 bg-green mt-6 rounded-3xl mr-12 relative add3">
                <h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة الثالثة<i className="fa-solid fa-pen-to-square modify-icon"></i></h2>
            </div>
            <div className="add-left w-72 h-20 bg-darkBlue mt-6 rounded-3xl mr-12 relative add5">
                <h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة الخامسة<i className="fa-solid fa-pen-to-square modify-icon"></i></h2>
            </div>
            <div className="add-left w-72 h-20 bg-purple mt-6 rounded-3xl mr-12 relative add7">
                <h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة السابعة<i className="fa-solid fa-pen-to-square modify-icon"></i></h2>
            </div>
            <div className="add-left w-72 h-20 bg-red mt-6 rounded-3xl mr-12 relative add9">
                <h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة التاسعة<i className="fa-solid fa-pen-to-square modify-icon"></i></h2>
            </div>


            </div>

            <div style={{width:'30%'}} className="center-category flex justify-between   mb-20">

            <div className=" py-10 mx-4 mt-52 "> <h1 className="text-3xl text-center  ">تقرير نماذج التعلم الالكتروني الكامل عن بعد والمدمج 2024</h1> </div>

        
            </div>

            <div style={{width:'35%',marginLeft:'-5%'}} className="left-category mt-10 ">

            <div className="add-left w-72 h-20 bg-greenYellow mt-6  rounded-3xl mr-16 relative add2">
            <h2 className="text-white text-center text-xl pt-4"> <i className="fa-solid fa-trash delete-icon"></i>الفئة الثانية<i className="fa-solid fa-pen-to-square  modify-icon"></i></h2>  
            </div>
            <div className="add-left w-72 h-20 bg-green mt-6  rounded-3xl mr-16 relative add4">
            <h2 className="text-white text-center text-xl pt-4"> <i className="fa-solid fa-trash delete-icon"></i>الفئة الرابعة<i className="fa-solid fa-pen-to-square modify-icon"></i></h2>
            </div>
            <div className="add-left w-72 h-20 bg-darkBlue mt-6  rounded-3xl mr-16 relative add6 ">
            <h2 className="text-white text-center text-xl pt-4"> <i className="fa-solid fa-trash delete-icon"></i> الفئة السادسة<i className="fa-solid fa-pen-to-square modify-icon"></i></h2>
            </div>
            <div className="add-left w-72 h-20 bg-purple mt-6  rounded-3xl mr-16 relative add8 ">
            <h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة الثامنة<i className="fa-solid fa-pen-to-square modify-icon"></i></h2>
            </div>
            <div className="add-left w-72 h-20 bg-red mt-6  rounded-3xl mr-16 relative add10 ">
            <h2 className="text-white text-center text-xl pt-4"> <i className="fa-solid fa-trash delete-icon"></i>الفئة العاشرة<i className="fa-solid fa-pen-to-square modify-icon"></i></h2>
            </div>
     
            </div>

        </div>

                  <div className="add-category-mobile hidden  mt-24  justify-between ">

      <div className="center-category flex justify-between px-4 mr-12 ">

      <div className="mx-4 "> <h1 className="text-3xl text-center  ">تقرير نماذج التعلم الالكتروني الكامل عن بعد والمدمج 2024</h1> </div>

     </div>

     <div style={{width:'35%'}} className="right-category mt-12">

<div className="add-left w-72 h-20 bg-greenYellow mt-6 rounded-3xl mr-12 relative add1">
<h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة الاولى<i className="fa-solid fa-pen-to-square  modify-icon"></i></h2>
</div>
<div className="add-left w-72 h-20 bg-green mt-6 rounded-3xl mr-12 relative add2">
<h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة الثانية<i className="fa-solid fa-pen-to-square  modify-icon"></i> </h2>
</div>
<div className="add-left w-72 h-20 bg-darkBlue mt-6 rounded-3xl mr-12 relative add3">
<h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة الثالثة<i className="fa-solid fa-pen-to-square  modify-icon"></i> </h2>
</div>
<div className="add-left w-72 h-20 bg-purple mt-6 rounded-3xl mr-12 relative add4">
<h2 className="text-white text-center text-xl pt-4"> <i className="fa-solid fa-trash delete-icon"></i>الفئة الرابعة<i className="fa-solid fa-pen-to-square  modify-icon"></i></h2>
</div>
<div className="add-left w-72 h-20 bg-red mt-6 rounded-3xl mr-12 relative add5">
<h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة الخامسة<i className="fa-solid fa-pen-to-square  modify-icon"></i> </h2>
</div>


      </div>


     <div style={{width:'35%',marginLeft:'-5%'}} className="left-category mt-12">

<div className="add-left w-72 h-20 bg-greenYellow mt-6  rounded-3xl mr-16 relative add6">
<h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة السادسة<i className="fa-solid fa-pen-to-square  modify-icon"></i></h2>  
</div>
<div className="add-left w-72 h-20 bg-green mt-6  rounded-3xl mr-16 relative add7">
<h2 className="text-white text-center text-xl pt-4"> <i className="fa-solid fa-trash delete-icon"></i>الفئة السابعة<i className="fa-solid fa-pen-to-square  modify-icon"></i></h2>
</div>
<div className="add-left w-72 h-20 bg-darkBlue mt-6  rounded-3xl mr-16 relative add8 ">
<h2 className="text-white text-center text-xl pt-4"> <i className="fa-solid fa-trash delete-icon"></i>الفئة الثامنة<i className="fa-solid fa-pen-to-square  modify-icon"></i></h2>
</div>
<div className="add-left w-72 h-20 bg-purple mt-6  rounded-3xl mr-16 relative add9 ">
<h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة التاسعة<i className="fa-solid fa-pen-to-square  modify-icon"></i> </h2>
</div>
<div className="add-left w-72 h-20 bg-red mt-6  rounded-3xl mr-16 relative add10 ">
<h2 className="text-white text-center text-xl pt-4"><i className="fa-solid fa-trash delete-icon"></i>الفئة العاشرة<i className="fa-solid fa-pen-to-square  modify-icon"></i></h2>
</div>


       </div>

</div>
    </section>

    <Footer />

    
    </>
    
  )
}
