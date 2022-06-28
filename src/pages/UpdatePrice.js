import { React } from "react";
const UpdatePrice = () => {
  return (
    <body>
      <div class="w-30 mx-auto mt-5 p-7">
        <p class="text-2xl font-medium text-gray-800">
          click here to open the modal
        </p>
        <button
          class="bg-purple-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600 
          focus:outline-none focus:ring-2 focus:ring-green-300"
          id="open-btn"
        >
          Open Modal
        </button>
      </div>
      <div
        class="fixed hidden insert-0 bg-gradient-to-r from-zinc-900 via-sky-900 to-zinc-800 overflow-y-auto h-full w-full"
        id="modal"
      >
        <div class="relative top-10 mx-auto p-5 border w-6/12 shadow-lg rounded-md bg-white">
          <div class="mt-3">
            <div class="block p-6 rounded-lg  bg-white max-w-sm">
              <form>
                <div class="form-group mb-6">
                  <label
                    for="exampleInputEmail1"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Quantity
                  </label>
                  <input
                    type="text"
                    class="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded-full
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group mb-6">
                  <label
                    for="exampleInputPassword1"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    New Price
                  </label>
                  <input
                    type="text"
                    class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded-full
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInputPassword1"
                    placeholder="CustomerId"
                  />
                </div>

                <button
                  type="submit"
                  class="
                px-6
                py-2.5
                bg-gray-900
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded-full
                shadow-md
                hover:bg-gray-700 hover:shadow-lg
                focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-gray-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
                  id="addcustomer"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  class="
                px-6
                py-2.5
                bg-gray-900
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded-full
                shadow-md
                hover:bg-gray-700 hover:shadow-lg
                focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-gray-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
                >
                  Clear
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <script>
  let modal = document.getElementById('modal');
  let btn = document.getElementById('open-btn');
  let button = document.getElementById('addcustomer');
  btn.onclick = function() {
  modal.style.display = 'block';
};

button.onclick = function() {
  modal.style.display = 'none';
};
window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    </script>
</script> */}
    </body>
  );
};

export default UpdatePrice;
