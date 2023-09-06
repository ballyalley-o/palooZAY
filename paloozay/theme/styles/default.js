import classNames from 'classnames'

/**
 * @root { @app/account}
 * ASSETS CLASSES
 */
export const StyledLoader = classNames('object-contain')
export const StyledLoaderWrapper = classNames('w-full flex-center')
export const StyledLogo = classNames('logo rounded-full')

export const StyledHome = classNames('_home')
export const StyledHomeH2 = classNames('_home_main-h2')
export const StyledHomeContainer = classNames('text-center')
export const StyledHomeDescP = classNames('_home_desc-p')

// components-------------------------------------------------------------------

/**
 * @root { @components/Logo}
 */
export const StyledLogoH1 = classNames('logo_nav')
export const StyledLogoWrapperDiv = classNames('object-contain h-10 mt-5 mb-15')

/**
 * @root { @components/MainGradient}
 */
export const StyledMainDiv = classNames('main')
export const StyledGradientDiv = classNames('gradient')

/**
 * @root { @components/Prompt}
 */
export const StyledMenuDropdown = classNames('dropdown')
export const StyledPromptListDiv = classNames('prompt_wrapper-div')
export const StyledPromptMainDiv = classNames('prompt_card')
export const StyledPromptDiv = classNames(
  'flex justify-between items-start gap-5 w-full '
)
export const StyledPromptWrapperDiv = classNames(
  'flex-1 flex justify-start items-center gap-3 cursor-pointer'
)

export const StyledContentWrapperDiv = classNames('prompt_detail-div')
export const StyledImage = classNames('rounded-full object-contain')
export const StyledTooltipWrapper = classNames('prompt_content-wrapper')
export const StyledTrashTooltip = classNames('prompt_card-trash')
export const StyledEditTooltip = classNames('prompt_card-edit')
/**
 * @root { @components/Tooltip}
 */
export const StyledPreTooltip = classNames('text-gray-200 btn')
export const StyledPostTooltip = classNames('btn text-gray-100')
export const StyledTooltipWrapperDiv = classNames('tooltip_wrapper')

export const StyledUserNameP = classNames('font-semibold vice')
export const StyledEmailCardP = classNames('prompt_content-email')
export const StyledPromptContentP = classNames('prompt_content')
export const StyledTagContentP = classNames('prompt_card-tag ')

/**
 * @root { @components/Feed}
 */
export const StyledFeedForm = classNames('relative w-full flex-center')
export const StyledFeedInput = classNames('search_input peer')
export const StyledFeed = classNames('feed')

/**
 * @root { @components/Form}
 */
export const StyledForm = classNames('form_wrapper')
export const StyledFormSection = classNames('form_section')
export const StyledFormDiv = classNames('flex-end mx-3 mb-5 gap-4 ')
export const StyledFormLabelH1 = classNames('form_label-h1')
export const StyledFormLabelSpan = classNames('form_label')
export const StyledFormDescP = classNames('form_desc-p')
export const StyledFormButton = classNames(
  'px-5 py-1.5 text-sm bg-primary-orange rounded-full btn orange_gradient border-2 m-2'
)
export const StyledFormTextarea = classNames('form_styled-textarea')
export const StyledFormCancelButton = classNames('discard_btn')

/**
 * @root { @components/Nav}
 */
export const StyledNav = classNames('nav_main')
export const StyledLogoLink = classNames('flex gap-2 flex-center')
export const StyledWrapperDiv = classNames('nav_mobile_wrapper')
export const StyledMenuWrapperDiv = classNames('nav_wrapper_btn')
export const StyledMobileMenuBtn = classNames('mt-5 w-full outline_btn')
export const StyledSignOutBtn = classNames('nav_signOut')
export const StyledSignedInDiv = classNames('outline_btn')
export const StyledMobileDiv = classNames('nav_mobile')
export const StyledPromptLink = classNames('black_btn')
export const StyledAccountLink = classNames('black_btn')
export const StyledMenuDropdownLink = classNames('dropdown_link')

/**
 * @root { @components/Account}
 */
export const StyledAccount = classNames('account_name')
export const StyledAccountContentP = classNames('account_content-p')
export const StyledAccountPromptDiv = classNames('account_prompt-div')
