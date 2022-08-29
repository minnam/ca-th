import { cn } from '../../../../utils/cn'

export const LinkCard = ({ title, desc, icon }) => {
  return <div
    className={cn(
      'p-5',
      'pt-6',
      'flex',
      'flex-col',
      'rounded-lg'
    )}
  >
    {icon}
    <h3
      className={cn(
        'text-md',
        'font-bold',
        'text-white',
        'whitespace-nowrap'
      )}
    >
      {title}
    </h3>
    <p
      className={cn(
        'mt-1',
        'text-sm',
        'text-blue400',
        'underline'
      )}
    >
      {desc}
    </p>
  </div>
}