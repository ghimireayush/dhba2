import memberData from "@/public/data/member-organizations.json"

export interface CommitteeMember {
  role: string
  name: string
  phone?: string
  photo?: string
}

export interface AboutUs {
  title: string
  paragraphs: string[]
  highlights: string[]
}

export interface PresidentMessage {
  greeting: string
  paragraphs: string[]
  presidentName: string
  presidentTitle: string
  organization: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  tagline: string
  taglineDescription: string
  mapEmbedUrl?: string
}

export interface MemberOrganization {
  id: string
  name: string
  shortName: string
  description: string
  location: string
  established: string
  aboutUs?: AboutUs
  presidentMessage?: PresidentMessage
  contactInfo?: ContactInfo
  committee: CommitteeMember[]
  advisors?: CommitteeMember[]
  staff?: CommitteeMember[]
}

export const memberOrganizations: MemberOrganization[] = memberData.organizations as MemberOrganization[]

export function getMemberOrganization(id: string): MemberOrganization | undefined {
  return memberOrganizations.find((org) => org.id === id)
}

export function getAllOrganizationIds(): string[] {
  return memberOrganizations.map((org) => org.id)
}
