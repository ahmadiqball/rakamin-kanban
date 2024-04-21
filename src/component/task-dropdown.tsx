export function TaskDropdown() {
  return (
    <div className='absolute py-2 w-80 bg-white shadow-dropdown rounded-lg font-semibold z-10'>
      <div className='flex items-center gap-4 py-1.5 text-sm leading-6 hover:(color-blue-700 cursor-pointer)'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.4538 11.8007L17.4537 11.8007L17.4575 11.8099C17.5075 11.9317 17.5075 12.0682 17.4575 12.1899L17.4574 12.1899L17.4538 12.1992C17.4306 12.2592 17.396 12.3141 17.3519 12.3609L12.3564 17.3564L12.355 17.3578C12.3085 17.4047 12.2532 17.4419 12.1923 17.4673C12.1314 17.4927 12.066 17.5057 12 17.5057C11.934 17.5057 11.8686 17.4927 11.8077 17.4673C11.7468 17.4419 11.6915 17.4047 11.645 17.3578L11.6421 17.3549C11.5952 17.3085 11.558 17.2532 11.5327 17.1922C11.5073 17.1313 11.4942 17.0659 11.4942 16.9999C11.4942 16.9339 11.5073 16.8686 11.5327 16.8077C11.558 16.7467 11.5952 16.6914 11.6421 16.6449L11.643 16.644L14.943 13.354L15.7997 12.4999H14.59H7C6.86739 12.4999 6.74022 12.4473 6.64645 12.3535C6.55268 12.2597 6.5 12.1325 6.5 11.9999C6.5 11.8673 6.55268 11.7402 6.64645 11.6464C6.74022 11.5526 6.86739 11.4999 7 11.4999H14.59H15.7997L14.943 10.6459L11.6436 7.35639C11.6435 7.35633 11.6434 7.35628 11.6434 7.35623C11.549 7.26171 11.4959 7.13356 11.4959 6.99994C11.4959 6.93374 11.5089 6.86819 11.5343 6.80703C11.5596 6.74588 11.5967 6.6903 11.6436 6.64349C11.7381 6.54896 11.8663 6.49585 12 6.49585C12.0662 6.49585 12.1317 6.50889 12.1929 6.53422C12.2541 6.55955 12.3096 6.59669 12.3564 6.64349L12.7083 6.29163L12.3564 6.64349L17.3519 11.639C17.396 11.6858 17.4306 11.7407 17.4538 11.8007Z'
            fill='#333333'
            stroke='#333333'
          />
        </svg>
        Move Right
      </div>

      <div className='flex items-center gap-4 py-1.5 text-sm leading-6 hover:(color-blue-700 cursor-pointer)'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.05688 10.6459L8.20019 11.4999H9.4099H16.9999C17.1325 11.4999 17.2597 11.5526 17.3534 11.6464C17.4472 11.7402 17.4999 11.8673 17.4999 11.9999C17.4999 12.1326 17.4472 12.2597 17.3534 12.3535C17.2597 12.4473 17.1325 12.4999 16.9999 12.4999H9.4099H8.20019L9.05688 13.354L12.3569 16.644L12.3578 16.6449C12.4047 16.6914 12.4419 16.7467 12.4672 16.8077C12.4926 16.8686 12.5057 16.9339 12.5057 16.9999C12.5057 17.0659 12.4926 17.1313 12.4672 17.1922C12.4419 17.2532 12.4047 17.3085 12.3578 17.3549L12.3578 17.3549L12.3549 17.3578C12.3084 17.4047 12.2531 17.4419 12.1922 17.4673C12.1313 17.4927 12.0659 17.5057 11.9999 17.5057C11.9339 17.5057 11.8685 17.4927 11.8076 17.4673C11.7467 17.4419 11.6914 17.4047 11.6449 17.3578L11.6434 17.3564L6.64797 12.3609C6.60393 12.3141 6.56933 12.2592 6.54608 12.1992L6.54617 12.1992L6.54239 12.1899C6.49238 12.0682 6.49238 11.9317 6.54239 11.8099L6.54248 11.81L6.54608 11.8007C6.56933 11.7407 6.60393 11.6858 6.64797 11.639L11.6434 6.64349L11.2917 6.29177L11.6435 6.64349C11.738 6.54896 11.8662 6.49585 11.9999 6.49585C12.1336 6.49585 12.2618 6.54896 12.3563 6.64349C12.4509 6.73803 12.504 6.86625 12.504 6.99994C12.504 7.13356 12.4509 7.26171 12.3565 7.35623C12.3564 7.35628 12.3564 7.35633 12.3563 7.35639L9.05688 10.6459Z'
            fill='#333333'
            stroke='#333333'
          />
        </svg>
        Move Left
      </div>

      <div className='flex items-center gap-4 py-1.5 text-sm leading-6 hover:(color-blue-700 cursor-pointer)'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.24289 17.4999L9.24289 17.4999H9.24H5C4.86739 17.4999 4.74021 17.4473 4.64645 17.3535C4.55268 17.2597 4.5 17.1325 4.5 16.9999L4.50001 12.7599L4.49999 12.757C4.49961 12.6912 4.51222 12.626 4.53711 12.5651C4.56186 12.5045 4.59826 12.4494 4.64426 12.4028C4.6445 12.4025 4.64475 12.4023 4.64499 12.402L11.5833 5.47375L11.5842 5.47287L14.4042 2.64287L14.405 2.64204C14.4515 2.59517 14.5068 2.55798 14.5677 2.53259C14.6286 2.50721 14.694 2.49414 14.76 2.49414C14.826 2.49414 14.8914 2.50721 14.9523 2.53259C15.0131 2.55794 15.0684 2.59508 15.1148 2.64185C15.1149 2.64192 15.1149 2.64198 15.115 2.64204L19.3544 6.93141L19.3544 6.93143L19.3579 6.93494C19.4048 6.98142 19.442 7.03672 19.4673 7.09765C19.4927 7.15858 19.5058 7.22393 19.5058 7.28994C19.5058 7.35595 19.4927 7.4213 19.4673 7.48223C19.4421 7.54276 19.4052 7.59773 19.3588 7.64403C19.3585 7.64433 19.3582 7.64464 19.3579 7.64494L16.5202 10.4226L16.5202 10.4226L16.5162 10.4266L9.59789 17.3549C9.59767 17.3552 9.59744 17.3554 9.59722 17.3556C9.55064 17.4016 9.49547 17.4381 9.43484 17.4628C9.37393 17.4877 9.30869 17.5003 9.24289 17.4999ZM15.1136 4.05639L14.76 3.70283L14.4064 4.05639L12.9864 5.47639L12.6329 5.82994L12.9864 6.18349L15.8164 9.01349L16.17 9.36705L16.5236 9.01349L17.9436 7.59349L18.2971 7.23994L17.9436 6.88639L15.1136 4.05639ZM5.64645 12.8164L5.5 12.9628V13.1699V15.9999V16.4999H6H8.83H9.03711L9.18355 16.3535L15.1136 10.4235L15.4671 10.0699L15.1136 9.71639L12.2836 6.88639L11.93 6.53283L11.5764 6.88639L5.64645 12.8164ZM3 20.4999H21C21.1326 20.4999 21.2598 20.5526 21.3536 20.6464C21.4473 20.7402 21.5 20.8673 21.5 20.9999C21.5 21.1325 21.4473 21.2597 21.3536 21.3535C21.2598 21.4473 21.1326 21.4999 21 21.4999H3C2.86739 21.4999 2.74021 21.4473 2.64645 21.3535C2.55268 21.2597 2.5 21.1325 2.5 20.9999C2.5 20.8673 2.55268 20.7402 2.64645 20.6464C2.74021 20.5526 2.86739 20.4999 3 20.4999Z'
            fill='#333333'
            stroke='#333333'
          />
        </svg>
        Edit
      </div>

      <div className='flex items-center gap-4 py-1.5 text-sm leading-6 hover:(color-red-700 cursor-pointer)'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.5 6V6.5H16H20C20.1326 6.5 20.2598 6.55268 20.3536 6.64645C20.4473 6.74021 20.5 6.86739 20.5 7C20.5 7.13261 20.4473 7.25979 20.3536 7.35355C20.2598 7.44732 20.1326 7.5 20 7.5H19H18.5V8V19C18.5 19.663 18.2366 20.2989 17.7678 20.7678C17.2989 21.2366 16.663 21.5 16 21.5H8C7.33696 21.5 6.70107 21.2366 6.23223 20.7678C5.76339 20.2989 5.5 19.663 5.5 19V8V7.5H5H4C3.86739 7.5 3.74021 7.44732 3.64645 7.35355C3.55268 7.25979 3.5 7.13261 3.5 7C3.5 6.86739 3.55268 6.74021 3.64645 6.64645C3.74021 6.55268 3.86739 6.5 4 6.5H8H8.5V6V5C8.5 4.33696 8.76339 3.70107 9.23223 3.23223C9.70107 2.76339 10.337 2.5 11 2.5H13C13.663 2.5 14.2989 2.76339 14.7678 3.23223C15.2366 3.70107 15.5 4.33696 15.5 5V6ZM14 6.5H14.5V6V5C14.5 4.60217 14.342 4.22064 14.0607 3.93934C13.7794 3.65804 13.3978 3.5 13 3.5H11C10.6022 3.5 10.2206 3.65804 9.93934 3.93934C9.65804 4.22064 9.5 4.60217 9.5 5V6V6.5H10H14ZM7 7.5H6.5V8V19C6.5 19.3978 6.65804 19.7794 6.93934 20.0607C7.22064 20.342 7.60218 20.5 8 20.5H16C16.3978 20.5 16.7794 20.342 17.0607 20.0607C17.342 19.7794 17.5 19.3978 17.5 19V8V7.5H17H7ZM10.3536 17.3536C10.2598 17.4473 10.1326 17.5 10 17.5C9.86739 17.5 9.74021 17.4473 9.64645 17.3536C9.55268 17.2598 9.5 17.1326 9.5 17V11C9.5 10.8674 9.55268 10.7402 9.64645 10.6464C9.74022 10.5527 9.86739 10.5 10 10.5C10.1326 10.5 10.2598 10.5527 10.3536 10.6464C10.4473 10.7402 10.5 10.8674 10.5 11V17C10.5 17.1326 10.4473 17.2598 10.3536 17.3536ZM14.3536 17.3536C14.2598 17.4473 14.1326 17.5 14 17.5C13.8674 17.5 13.7402 17.4473 13.6464 17.3536C13.5527 17.2598 13.5 17.1326 13.5 17V11C13.5 10.8674 13.5527 10.7402 13.6464 10.6464C13.7402 10.5527 13.8674 10.5 14 10.5C14.1326 10.5 14.2598 10.5527 14.3536 10.6464C14.4473 10.7402 14.5 10.8674 14.5 11V17C14.5 17.1326 14.4473 17.2598 14.3536 17.3536Z'
            fill='#333333'
            stroke='#333333'
          />
        </svg>
        Delete
      </div>
    </div>
  );
}
