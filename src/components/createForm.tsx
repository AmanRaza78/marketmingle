"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "~/trpc/react";
interface BrandInterface {
    id: number;
    name: string;
  }
  
  interface CategoryInterface {
    id: number;
    name: string;
  }

  interface CreateFormProps {
    brands?: BrandInterface[];
    categories?: CategoryInterface[];
  }

const CreateForm: React.FC<CreateFormProps> = ({ brands, categories }) => {

    const createproduct = api.product.createProduct.useMutation()

    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        price: '',
        category: '',
        description: ''
      });
    
      const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createproduct.mutate({
            name: formData.name,
            price: parseFloat(formData.price),
            description: formData.description,
            brandId: parseInt(formData.brand),
            categoryId:parseInt(formData.category)
          })
      };



  return(
    <form onSubmit={handleSubmit}>
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleInputChange}
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Type product name"
              />
            </div>
            <div>
              <label
                htmlFor="brand"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Brand
              </label>
              <select
                id="brand"
                name="brand"
                onChange={handleInputChange}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              >
                <option>Select category</option>

                {brands &&
                  brands.map((_brand, index) => (
                    <option key={index} value={_brand.id}>{_brand.name}</option>
                  ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                onChange={handleInputChange}
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="$2999"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                onChange={handleInputChange}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              >
                <option>Select category</option>
                {categories &&
                  categories.map((_category,index) => (
                    <option key={index} value={_category.id}>{_category.name}</option>
                  ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                onChange={handleInputChange}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Write product description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              className="-ml-1 mr-1 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Add new product
          </button>
        </form>
  )
}

export default CreateForm