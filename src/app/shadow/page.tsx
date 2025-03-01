import { ClientWrapper } from "../components/ClientWrapper"
import { DropdownInput } from "../components/DropdownInput"
import { GenerationSelector } from "../components/GenerationSelector"
import { ScaleShadowImage } from "../components/ScaleShadowImage"
import { TriesCounter } from "../components/TriesCounter"
import { TriesList } from "../components/TriesList"

export default async function Shadow() {
  return (
    <div className="flex flex-col gap-5 px-5 py-10 items-center border-4 rounded-tl-xl rounded-br-xl max-w-xl m-auto">
      <ClientWrapper/>
      <GenerationSelector/>
      <TriesCounter/>
      <ScaleShadowImage/>
      <DropdownInput showImages={false} />
      <TriesList/>
    </div>
  )
}