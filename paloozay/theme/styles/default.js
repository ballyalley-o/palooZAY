import classNames from 'classnames'

export const StyledHome = classNames('w-full flex-center m-auto flex-col')

/**
 * @root { @components/Prompt}
 */
export const StyledPromptMainDiv = classNames('prompt_card')
export const StyledPromptDiv = classNames(
  'flex justify-between items-start gap-5 w-full'
)
export const StyledPromptWrapperDiv = classNames(
  'flex-1 flex justify-start items-center gap-3 cursor-pointer'
)
export const StyledContentWrapperDiv = classNames('flex flex-col')
export const StyledImage = classNames('rounded-full object-contain')

/**
 * @root { @components/Tooltip}
 */
export const StyledPreTooltip = classNames('text-gray-200 btn')
export const StyledPostTooltip = classNames('btn text-gray-100')

export const StyledUserNameP = classNames('font-semibold vice')
export const StyledEmailCardP = classNames(
  'font-inter text-xs text-gray-200 italic opacity-10 text-light'
)
export const StyledPromptContentP = classNames('prompt_content')
export const StyledTagContentP = classNames(
  'font-inter text-sm text-gray-200 cursor-pointer'
)

/**
 * @root { @components/Feed}
 */
export const StyledFeedForm = classNames('relative w-full flex-center')
export const StyledFeedInput = classNames('search_input peer')
export const StyledFeed = classNames('feed')

/**
 * @root { @components/Form}
 */
export const StyledFormDiv = classNames('flex-end mx-3mb-5 gap-4')
export const StyledFormButton = classNames(
  'px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
)
export const StyledFormCancelButton = classNames('text-gray-200 text-sm')

/**
 * @root { @components/Nav}
 */
export const StyledNav = classNames('flex-between w-full mb-20 bg-black mt-5')
export const StyledLogoLink = classNames('flex gap-2 flex-center')
export const StyledWrapperDiv = classNames('sm:flex hidden')
export const StyledMenuWrapperDiv = classNames('flex gap-3 md:gap-5')
