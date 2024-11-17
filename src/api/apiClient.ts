import process from 'node:process'

interface FetchConfig extends RequestInit {
  headers?: Record<string, string>
}

interface ApiResponse<T> {
  error: boolean
  message: string
  status: number
  data?: T
}

const baseUrl = process.env.BASE_URL

const defaultConfig: FetchConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  // credentials: 'include',
}

export async function apiFetch<T>(url: string, config: FetchConfig = {}): Promise<ApiResponse<T>> {
  const combinedConfig: FetchConfig = {
    ...defaultConfig,
    ...config,
    headers: {
      ...defaultConfig.headers,
      ...config.headers,
    },
  }

  try {
    const res = await fetch(`${baseUrl}${url}`, combinedConfig)
    const data = await res.json()

    if (!res.ok) {
      return {
        error: true,
        message: data.message || 'Error fetching data',
        status: res.status,
      }
    }

    return {
      error: false,
      message: 'Request succeeded',
      status: res.status,
      data,
    }
  }
  catch (err) {
    console.error('API Fetch Error:', err)

    return {
      error: true,
      message: err instanceof Error
        ? err.message
        : 'Unknown error occurred',
      status: 0,
    }
  }
}

export async function apiGet<T>(url: string, config: FetchConfig = {}): Promise<ApiResponse<T>> {
  return await apiFetch(url, { ...config, method: 'GET' })
}

export async function apiPost<T, U = unknown>(url: string, data: U, config: FetchConfig = {}): Promise<ApiResponse<T>> {
  return await apiFetch<T>(url, {
    ...config,
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function apiPatch<T, U = unknown>(url: string, data: U, config: FetchConfig = {}): Promise<ApiResponse<T>> {
  return await apiFetch<T>(url, {
    ...config,
    method: 'PATCH',
    body: JSON.stringify(data),
  })
}

export async function apiDelete<T>(url: string, config: FetchConfig = {}): Promise<ApiResponse<T>> {
  return await apiFetch<T>(url, {
    ...config,
    method: 'DELETE',
  })
}
