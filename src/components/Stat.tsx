interface Props {
  title: "Tipo 1" | "Tipo 2" | "Altura" | "Peso",
  value: number | string,
  compareValue: number | string
}
export const Stat = ({title, value, compareValue}: Props) => {
  console.log(value, compareValue)
  return (
    <div className={`flex flex-col items-center justify-evenly border-2 ${compareValue == value ? 'border-emerald-500': 'border-red-500'} rounded-tl-xl rounded-br-xl p-3 h-[100px] w-[100px]`}>
      <p className="text-xs">{title}</p>
      <p className="text-[10px]">
        {
          title === 'Altura' && `${(Number(compareValue)/10 - Number(value)/10).toFixed(1)} m` 
          || title === 'Peso' && `${(Number(compareValue)/10 - Number(value)/10).toFixed(1)} kg` 
          || value
        }</p>
    </div>
  )
}