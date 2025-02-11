import Toast from "react-native-toast-message";

type ResponseDataType<T> = T & {
  expose?: boolean;
  statusCode?: number;
  message?: string;
};

export type RequestType = {
  url: RequestInfo | URL;
  method: "GET" | "POST" | "PUT" | "DELETE";
  isAuthenticatedRoute: boolean;
  baseUrl?: string;
  body?: object;
  errorMessage?: string;
  headers?: HeadersInit;
  mode?: RequestMode;
  options?: RequestInit;
  successMessage?: string;
};

export type ResponseType<T = unknown> = {
  body: ReadableStream<Uint8Array> | null;
  bodyUsed: boolean;
  headers: Headers;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: globalThis.ResponseType;
  url: string;
  data: ResponseDataType<T>;
};

const requester = async <T>({
  baseUrl = process.env.EXPO_PUBLIC_KOFI_API_BASE_URL,
  body,
  errorMessage,
  headers,
  isAuthenticatedRoute,
  method,
  mode = "cors",
  url,
  options,
  successMessage,
}: RequestType): Promise<ResponseType<T>> => {
  // TODO: implement route authentication
  // const token = getToken();

  // if (isAuthenticatedRoute && !token) {
  //   await reAuth();
  // }

  try {
    const response = await fetch(`${baseUrl}${url}`, {
      mode: options?.mode ?? mode,
      method: options?.method ?? method,
      headers: {
        ...options?.headers,
        ...headers,
        "Content-Type": "application/json",
        ...(isAuthenticatedRoute &&
          {
            // Authorization: `Bearer ${token}`,
          }),
      },
      body: options?.body ?? (body ? JSON.stringify(body) : undefined),
    });

    if (response.status === 401) {
      // await reAuth();
    }

    if (!response.ok) {
      // const errorResponse = await response.json();

      // if (
      //   errorResponse &&
      //   errorResponse.error.code &&
      //   errorResponse.error.description
      // ) {
      //   throw new Error(
      //     errorResponse.error.code,
      //     errorResponse.error.description
      //   );
      // }

      throw new Error(response.statusText);
    }

    const data: ResponseType<T>["data"] = await response
      .json()
      .catch(() => null);

    if (successMessage !== undefined) {
      Toast.show({
        type: "success",
        text1: successMessage,
        position: "bottom",
      });
    }

    return {
      body: response.body,
      bodyUsed: response.bodyUsed,
      headers: response.headers,
      ok: response.ok,
      redirected: response.redirected,
      status: response.status,
      statusText: response.statusText,
      type: response.type,
      url: response.url,
      data: data,
    };
  } catch (e) {
    if (errorMessage !== undefined) {
      Toast.show({
        type: "error",
        text1: errorMessage,
        position: "bottom",
      });
    }

    throw e;
  }
};

export default requester;
