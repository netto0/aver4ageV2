export default function Checkbox() {
  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="hidden peer" />
        <div
          className={`relative w-9 h-5 peer-focus:outline-none rounded-full peer 
            bg-color4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
            after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all 
            border-gray-600 peer-checked:bg-customOrange`}
        />
      </label>
    </>
  );
}