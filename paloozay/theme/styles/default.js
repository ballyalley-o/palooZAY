import classNames from 'classnames'

export const StyledHome = classNames('w-full flex-center m-auto flex-col')
// prompts
export const StyledPromptMainDiv = classNames('prompt_card')
export const StyledPromptDiv = classNames(
  'flex justify-between items-start gap-5 w-full'
)
export const StyledPromptWrapperDiv = classNames(
  'flex-1 flex justify-start items-center gap-3 cursor-pointer'
)
export const StyledContentWrapperDiv = classNames('flex flex-col')
export const StyledImage = classNames('rounded-full object-contain')

// tooltip
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
