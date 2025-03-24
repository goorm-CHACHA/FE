import {
  DBFormattedType,
  UserType,
  DBUserType,
  PartialFormDataType,
} from '~/types/form';

export function formatFormData(data: PartialFormDataType): DBFormattedType {
  return {
    name: data.name ?? '',
    username: data.username ?? '',
    password: data.password ?? '',
    affiliation: data.affiliation ?? '',
    career: data.career?.value ?? '',
    contactInfo: data.contactInfo ?? '',
    email: data.email ?? '',
    interestJobCategory: data.interestJob?.category ?? '',
    interestJobValue: data.interestJob?.value ?? '',
    jobCategory: data.job?.category ?? '',
    jobValue: data.job?.value ?? '',
    interests: data.interest ?? [],
    participationPurpose: data.participationPurpose?.value ?? '',
  };
}

export function formatToMyPageForm(data: DBUserType): UserType {
  return {
    name: data.name,
    affiliation: data.affiliation,
    contactInfo: data.contactInfo,
    email: data.email,
    career: { value: data.career },
    job: {
      category: data.jobCategory,
      value: data.jobValue,
    },
    interests: data.interests,
    interestJob: {
      category: data.interestJobCategory,
      value: data.interestJobValue,
    },
    participationPurpose: { value: data.participationPurpose },
  };
}

export function formatToDB(data: UserType): DBUserType {
  return {
    name: data.name,
    affiliation: data.affiliation,
    contactInfo: data.contactInfo,
    email: data.email,
    career: data.career.value,
    jobCategory: data.job.category,
    jobValue: data.job.value,
    interests: data.interests,
    interestJobCategory: data.interestJob.category,
    interestJobValue: data.interestJob.value,
    participationPurpose: data.participationPurpose.value,
  };
}
