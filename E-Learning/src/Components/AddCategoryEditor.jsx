
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import HeaderViewer from "./HeaderViewer";

export default function AddCategoryEditor() {

  function addCategory(){
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "تم  اضافة الفئة بنجاح",
      showConfirmButton: false,
      timer: 2000
    });
  }
  return (

    <>
    <HeaderViewer />

    <section className="">

        <div className="add-category-admin mt-20 mb-60 relative">

            <form className="" action="">

                <div className=" block">
                <label style={{marginRight:'10%'}} className="text-4xl font-bold block mb-4 " htmlFor="addCategory">عنوان الفئة :</label>
                <input id="addCategory" style={{width:'80%',marginLeft:'10%',marginRight:'10%'}} name="" className="w-72 h-12 p-4 border border-input outline-slate-400 rounded-lg" type="text" />
                </div>

                <div className="block mt-10">
                <label style={{marginRight:'10%'}} className="text-4xl font-bold block mb-4" htmlFor="">وصف الفئة :</label>
                <textarea style={{width:'80%',marginLeft:'10%',marginRight:'10%'}} className="w-72 h-32 p-4 border border-input outline-slate-400 rounded-lg" name="" id=""></textarea>
                </div>

            </form>

            <div className="btn-add-category">
            <button onClick={addCategory}  className="w-60 h-14  mb-10 mt-10 bg-header border-2 border-gray-400 text-white text-4xl px-4 py-2 rounded-lg"> <Link to='/categoryeditor'>اضافة فئة</Link><i className="fa-solid fa-check  border-2 border-white w-8 h-8 rounded-full text-xl "></i></button>
            </div>

        </div>

    </section>
    </>


  )
}
