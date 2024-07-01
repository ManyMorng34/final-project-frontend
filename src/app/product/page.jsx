import { getCategoryService } from "@/services/category.service";
import { getProductService } from "@/services/product.service";

const Product = async () => {
  const categoryResponse = await getCategoryService();
  const categories = categoryResponse.payload || [];
  const productResponse = await getProductService();
  const products = productResponse.payload || [];

  return (
    <div>
      <main>
        <div className="flex flex-wrap items-start justify-center p-5 py-10">
          {categories?.map((category) => (
            <a
              key={category.categoryId}
              className="relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200"
              href={`https://tailwindflex.com/tag/${category.categoryName.toLowerCase()}`}
            >
              <span className="text-sm">{category.categoryName}</span>
            </a>
          ))}
        </div>

        <div className="text-center pb-5">
          <h1 className="font-bold text-4xl mb-4">Let's enjoy our store</h1>
          <h1 className="text-3xl">Welcome</h1>
        </div>

        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {products.map((product) => (
            <div
              key={product.productId}
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <img
                  src={product.description || "https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg"}
                  alt={product.productName}
                  className="h- w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {product.image || "Description"}
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {product.productName}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      ${product.price}
                    </p>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Product;
