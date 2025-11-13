export interface Review {
    id: number;
    user_email: string;
    stars: number;
    comment: string;
    book_id: number;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    reviews: Review[];
}

export interface LaravelValidationError {
    message: string;
    errors: {
        [key: string]: string[];
    };
}

export function getValidationMessages(errorResponse: any): string[] {
    if (!errorResponse?.errors) {
        return [];
    }
    const validationErrors = errorResponse.errors;
    return Object.values<string[]>(validationErrors).flatMap(
        (messages) => messages
    );
}

export interface User {
    id: number;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    role: string;
}

export interface DecodedToken {
    email: string;
    exp: number;
    iat: number;
    role: string;
}