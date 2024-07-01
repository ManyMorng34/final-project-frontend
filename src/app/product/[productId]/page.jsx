import {
    getProductByIdService,
    getProductService,
  } from "@/services/product.service";
  
  const productDetail = async ({ params }) => {
    console.log("param", params);
    const productDetailData = await getProductByIdService(params.productId);
    console.log("productDatailData", productDetailData);
    return (
      <main>
              <div class="flex flex-wrap items-start justify-center p-5 py-10">
          <a
            class=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
            href="https://tailwindflex.com/tag/card"
          >
            <span class="text-sm">Drink</span>
          </a>
          <a
            class=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
            href="https://tailwindflex.com/tag/card"
          >
            <span class="text-sm">Food</span>
          </a>
          <a
            class=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
            href="https://tailwindflex.com/tag/card"
          >
            <span class="text-sm">Fruit</span>
          </a>
          <a
            class=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
            href="https://tailwindflex.com/tag/card"
          >
            <span class="text-sm">Cookie</span>
          </a>
          <a
            class=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
            href="https://tailwindflex.com/tag/card"
          >
            <span class="text-sm">Card</span>
          </a>
          <a
            class=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
            href="https://tailwindflex.com/tag/call-to-action"
          >
            <span class="text-sm">Call to Action</span>
          </a>
          <a
            class=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
            href="https://tailwindflex.com/tag/carousel"
          >
            <span class="text-sm">Carousel</span>
          </a>
          <a
            class=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
            href="https://tailwindflex.com/tag/banner"
          >
            <span class="text-sm">Banner</span>
          </a>
          <a
            class=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
            href="https://tailwindflex.com/tag/breadcrumb"
          >
            <span class="text-sm">Breadcrumb</span>
          </a>
          <a
            class=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
            href="https://tailwindflex.com/tag/avatar"
          >
            <span class="text-sm">Avatar</span>
          </a>
          <a
            class=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
            href="https://tailwindflex.com/tag/blog"
          >
            <span class="text-sm">Blog</span>
          </a>
     
        </div>
      </main>
    );
  };
  
  export default productDetail;
  