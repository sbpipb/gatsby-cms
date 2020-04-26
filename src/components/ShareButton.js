import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
} from 'react-share'

export const ShareButtons = ({
  fontSize = '40',
  twitterHandle,
  url,
  title,
  tags,
}) => (
  <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '16px' }}>
    <FacebookShareButton url={url} style={{ marginRight: '8px' }}>
      <FacebookIcon size={fontSize} round='true' />
    </FacebookShareButton>

    <FacebookMessengerShareButton url={url} style={{ marginRight: '8px' }}>
      <FacebookMessengerIcon size={fontSize} round='true' />
    </FacebookMessengerShareButton>

    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
      style={{ marginRight: '8px' }}
    >
      <TwitterIcon size={fontSize} round='true' />
    </TwitterShareButton>

    <LinkedinShareButton url={url} style={{ marginRight: '8px' }}>
      <LinkedinIcon size={fontSize} round='true' />
    </LinkedinShareButton>
  </div>
)

export default ShareButtons
