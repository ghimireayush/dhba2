import memberData from "@/public/data/member-organizations.json"

export interface CommitteeMember {
  role: string
  name: string
  phone: string
  photo?: string
}

export interface MemberOrganization {
  id: string
  name: string
  shortName: string
  description: string
  location: string
  established: string
  committee: CommitteeMember[]
}

export const memberOrganizations: MemberOrganization[] = memberData.organizations

export function getMemberOrganization(id: string): MemberOrganization | undefined {
  return memberOrganizations.find((org) => org.id === id)
}

export function getAllOrganizationIds(): string[] {
  return memberOrganizations.map((org) => org.id)
}
