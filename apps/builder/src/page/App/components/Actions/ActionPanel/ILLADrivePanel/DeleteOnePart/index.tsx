import { FC } from "react"
import { useTranslation } from "react-i18next"
import { CODE_LANG } from "@/components/CodeEditor/CodeMirror/extensions/interface"
import { InputEditor } from "@/page/App/components/Actions/InputEditor"
import { DeleteOneContent } from "@/redux/currentApp/action/illaDriveAction"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { ILLADriveActionPartProps } from "../interface"

export const DeleteOnePart: FC<ILLADriveActionPartProps> = (props) => {
  const { t } = useTranslation()
  const commandArgs = props.commandArgs as DeleteOneContent
  const { handleOptionsValueChange } = props

  return (
    <>
      <InputEditor
        title={t("editor.action.panel.label.drive.file_id")}
        tips={t("editor.action.panel.label.tips.drive.file_id")}
        placeholder={t("editor.action.panel.label.placeholder.drive.file_id")}
        lineNumbers
        mode={CODE_LANG.JAVASCRIPT}
        value={commandArgs.fileID}
        onChange={(value) => handleOptionsValueChange("fileID", value)}
        expectedType={VALIDATION_TYPES.STRING}
      />
    </>
  )
}

DeleteOnePart.displayName = "DeleteOnePart"
