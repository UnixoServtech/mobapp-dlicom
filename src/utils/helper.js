export const VALIDATION_REGEX = {
  email: /^\w+([\.-]?\w+)*([+]\w+)?@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  strongPassword:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-\/\\^$*+?.()|[\]{}"!@#%&,><':;_~=`])(?=.{8,})/,
  mediumPassword:
    /^((?=.*[a-z])|(?=.*[-\/\\^$*+?.()|[\]{}"!@#%&,><':;_~=`])|(?=.*[0-9]))(?=.{8,})/,
  specialCharacter: /[-\/\\^$*+?.()|[\]{}"!@#%&,><':;_~=`]/,
  hasEmoji:
    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,
  isImageType: /\.(jpg|jpeg|png|webp|avif|gif|svg)$/,
  isSvg: /\.(gif|svg)$/,
  IMAGE_TAG: /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/gim,
  IFRAME_TAG: /<iframe\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/gim,
  VIDEO_TAG: /<video\s[^>].?controls|<\/video>/gim,
  AUDIO_TAG: /<audio\s[^>].?controls|<\/audio>/gim,
  IFRAME_SRC: /src="([^"]+)"/gim,
  SOURCE_YOUTUBE: /\byoutube/gim,
  HTML_TAGS: /(<([^>]+)>)/gi,
  ANCHER_TAG: /href="([^"]*)/,
  IMAGE_SRC: /<img.*?src=['"](.*?)["']/,
  HTTP_URL:
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  seedPhrase: /\w+/gu,
};
