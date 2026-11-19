// Native Amp directory plugin for tailrocks-vitalik-mode-skills.
const skillEntries = [
  {
    "id": "vitalik-mode",
    "explicitOnly": true
  }
]

export default async function (amp) {
  for (const { id, explicitOnly } of skillEntries) {
    await amp.registerSkill({ path: `skills/${id}`, listed: !explicitOnly })
  }
}
