interface ImageDto {
  id: string;
  filename: string;
  width: number;
  height: number;
  url: string;
  thumbnails: {
    full: string;
    large: string;
    small: string;
  };
}

interface EmployeeDto {
  id: string;
  fields: {
    first_name: string;
    last_name: string;
    role: string;
    picture: ImageDto[];
  };
}

interface ApiResponse {
  records: EmployeeDto[]
}

export const fetchEmployees = async (): Promise<ApiResponse> => {
  const response = await fetch(`${process.env.AIRTABLE_BASE_URL}/employees`, {
    headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
    },
    // cache: 'no-store',
    // next: {
    //     revalidate: 0,
    // }
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error('Network error');
}