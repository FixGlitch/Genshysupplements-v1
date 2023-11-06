import { useForm } from "react-hook-form"
import { NavLink, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProductId, getProperty, postProduct } from "../../redux/products/productsActions"
import React, { useEffect } from "react";
//import fs from "fs"


export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch()
  const params = useParams()
  const { detail, category, diet, flavor, weightType } = useSelector((state) => state.products);

  useEffect(() => {
    if (params.id) {
      dispatch(getProductId(params.id));
    }
  }, [params.id, dispatch]);

  useEffect(() => {
    // Set default values for the form fields when product_detail changes
    if (detail && params.id) {
      setValue('title', detail.title);
      setValue('file', detail.image); // You may need to handle file inputs differently
      setValue('price', detail.price);
      setValue('category', detail.category);
      setValue('stock', detail.stock);
      setValue('diet', detail.diet);
      setValue('flavor', detail.flavor);
      setValue('value', detail.weight?.value);
      setValue('type', detail.weight?.type);
    }
  }, [detail, setValue]);
  console.log(setValue)

  useEffect(() => {
    dispatch(getProperty('category'))
    dispatch(getProperty('diet'))
    dispatch(getProperty('flavor'))
    dispatch(getProperty('weight.type'))
  }, []);

  console.log(detail);
  console.log(detail.category);
 

  const onSubmit = handleSubmit((data) => {
    // const file = new Blob([fs.readFileSync('ruta-de-la-imagen.jpg')], {
    //   type: 'image/jpeg', // Tipo MIME para imágenes JPEG
    // });
    // const formData = new FormData();
    // formData.append('imagen', file, 'nombre-de-la-imagen.jpg');
    console.log(data)
    let formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("title",data.title)
    formData.append("price",data.price)
    formData.append("category",data.category)
    formData.append("stock",data.stock)
    formData.append("diet",data.diet)
    formData.append("flavor",data.flavor)
    formData.append("value",data.value)
    formData.append("type",data.type)

    dispatch(postProduct(formData))
    console.log(formData)
    alert("send")
  })

  return (
    <div className="bg-graym rounded-md flex flex-col m-auto sm:pr-[60px] sm:w-[250px] md:w-[350px] my-[20px] p-[50px] w-[600px]">
      <form className="text-blackFred-100 font-roboto text-left" onSubmit={() => onSubmit}>
        <NavLink to="/products">
          <button className="bg-redFred-100 text-blackFred-100 text-[15px] hover:text-orangeFred-100">⇦back</button>
        </NavLink>
        <div className="flex flex-col">
        <h1 className="-mt-12 ml-[100px]">Add new Product</h1>
        <div className="bg-white rounded-md p-2 ">
          <label className=" text-9xl">Product Image</label>
          <br/>
          <input
            className=""
            type="file"
            {...register("file", {
              required: {
                value: true,
                message: "required",
              },
            })}
          />
          {errors.file && <span>{errors.file.message}</span>}
        </div>
        <div className="sm:m-0 md:mt-0 md:ml-0 -mt-[70px] ml-[300px]">
          <label className="text-9xl">Title: </label>
          <input
          className="w-[280px] h-[30px]"
            type="text"
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/\s/g, ""))
            }
            {...register("title", {
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 3,
                message: "The title must be at least 3 letters",
              },
              maxLength: {
                value: 30,
                message: "The title cannot contain more than 30 letters.",
              },
            })}
            placeholder="Product title..."
            autoComplete="off"
          ></input>
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div className="mt-[20px]">
          <label className="text-9xl">Price : </label>
          <input
          className="w-[280px] h-[30px]"
            type="number"
            min="1"
            {...register("price", {
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "The field only accepts numbers",
              },
            })}
          ></input>
          {errors.price && <span>{errors.price.message}</span>}
        </div>

        <div className="mt-[20px]">
          <label className="text-9xl">Category : </label>
          <select
          className="w-[280px] h-[40px]"
            {...register("category", {
              required: {
                value: true,
                message: "Please select a category",
              },
            })}
            defaultValue="food"
          >
           {category.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
          </select>
          {errors.category && <span>{errors.category.message}</span>}
        </div>

        <div className="mt-[20px]">
          <label className="text-9xl">Stock : </label>
          <input
          className="w-[280px] h-[30px]"
            type="number"
            min="1"
            {...register("stock", {
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "The field only accepts numbers",
              },
            })}
          ></input>
          {errors.stock && <span>{errors.stock.message}</span>}
        </div>
        <div className="mt-[20px]">
          <label className="text-9xl">Diet : </label>
          <select
          className="w-[280px] h-[40px]"
            placeholder="Unspecified"
            {...register("diet", {
              required: {
                value: true,
                message: "Please select a diet",
              },
            })}
            defaultValue="Unspecified"
          >
            {diet.map((diet, index) => (
                            <option key={index} value={diet}>
                                {diet}
                            </option>
                        ))}
          </select>
          {errors.diet && <span>{errors.diet.message}</span>}
        </div>
        <div className="mt-[20px]">
          <label className="text-9xl">Flavor : </label>
          <select
          className="w-[280px] h-[40px]"
            placeholder="Unspecified"
            {...register("flavor", {
              required: {
                value: true,
                message: "Please select a flavor",
              },
            })}
            defaultValue="Unspecified"
          >
            {flavor.map((flavor, index) => (
                            <option key={index} value={flavor}>
                                {flavor}
                            </option>
                        ))}
          </select>
          {errors.flavor && <span>{errors.flavor.message}</span>}
        </div>

        <div className="mt-[20px]">
          <label className="text-9xl">Weight Value : </label>
          <input
          className="w-[280px] h-[30px]"
            type="number"
            min="1"
            {...register("value", {
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "The field only accepts numbers",
              },
            })}
          ></input>
          {errors.value && <span>{errors.value.message}</span>}
        </div>
        <div className="my-[20px]">
          <label className="text-9xl" >Type : </label>
          <select
          className="w-[280px] h-[40px]"
            {...register("type", {
              required: {
                value: true,
                message: "Please select a type",
              },
            })}
            defaultValue="gr"
          >
            {weightType.map((weight, index) => (
                            <option key={index} value={weight}>
                                {weight}
                            </option>
                        ))}
          </select>
          {errors.type && <span>{errors.type.message}</span>}
        </div>

        {params.id 
        ? <button className="bg-redFred-100 text-blackFred-300 text-[20px] font-roboto" type="submit">Edit Product</button> 
        : <button className="bg-redFred-100 text-blackFred-300 text-[20px] font-roboto" type="submit">Add Product</button>
        }</div>
      </form>
    </div>
  )
}