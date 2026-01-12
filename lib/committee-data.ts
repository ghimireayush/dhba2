import committeeData from "@/public/data/committee-data.json"

export interface Member {
  name: string
  position: string
  phone?: string
  photo?: string
}

export const workingCommittee: Member[] = committeeData.workingCommittee
export const members: Member[] = committeeData.members
export const staff: Member[] = committeeData.staff
