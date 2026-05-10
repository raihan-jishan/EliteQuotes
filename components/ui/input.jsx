 
export const Input = ({
  label,
  For,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  icon, 
  defaultValue, 
}) => {
  return (
    <div className="w-full px-3 mb-5 ">
      <Label htmlFor={For}>{label}</Label>
      <div className="relative mt-1 ">
        {/* Icon container */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-center pointer-events-none flex items-center justify-center text-emerald-600">
          {icon}
        </div>

        {/* Input field */}
        <input
          id={id}
          name={name}
          value={value}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`w-full pl-10 pr-3 p-3 rounded-sm   bg-background/60 border border-gray-300/20 text-white outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500   transition-all duration-200 ease-in-out    `}
          onChange={onChange}
          aria-label={label}
          aria-required="true"
        />
      </div>
    </div>
  );
};

function Label({children, For}) {
  <label
      htmlFor={For}
      className="block text-[0.9rem]   font-medium text-gray-200 capitalize"
    >
      {children}
    </label>
}