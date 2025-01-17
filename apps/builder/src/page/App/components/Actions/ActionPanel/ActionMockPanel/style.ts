import { css } from "@emotion/react"
import { getColor } from "@illa-design/react"

export const mockDataContainerStyle = css`
  display: flex;
  padding: 8px 0;
  flex-direction: column;
  gap: 10px;
`

export const mockDataTitleStyle = css`
  color: ${getColor("grayBlue", "02")};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`

export const spaceStyle = css`
  border-bottom: 1px solid ${getColor("grayBlue", "08")};
`

export const mockPanelContainerStyle = css`
  padding: 8px 16px;
  width: 100%;
`

export const triggerModeContainerStyle = css`
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
`
