import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
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

    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
      style={{ marginRight: '8px' }}
    >
      <TwitterIcon size={fontSize} round='true' />
    </TwitterShareButton>
  </div>
)

export default ShareButtons
