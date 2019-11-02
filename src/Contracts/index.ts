
export const SetInnerHtml = (htmlString: string) => {
    return {
        __html: htmlString
    };
};

export interface AuthWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    dataLayer: Array<any>;
    _LTracker: any;
}

export const AuthStorageKeys = {
    AuthEmail: 'auth-email',
    AuthToken: 'auth-token'
};

interface SessionStorage extends Storage {
    get: (key: string, parseJson: boolean) => any;
    save: (key: string, data: any) => void;
    deleteItem: (key: string) => void;
    deleteAll: () => void;
}

class SessionStorage implements SessionStorage {
    get = (key: string, parseJson: boolean): any => {
        let data: any = sessionStorage.getItem(key) || null;
        if (data && parseJson) {
            data = JSON.parse(data);
        }
        return data;
    }
    save = (key: string, data: any) => {
        sessionStorage.setItem(key, JSON.stringify(data));
    }
    deleteItem = (key: string) => {
        sessionStorage.removeItem(key);
    }
    deleteAll = () => {
        sessionStorage.clear();
    }
}

export const AuthSessionStorage: SessionStorage = new SessionStorage();

interface LocalStorage extends Storage {
    get: (key: string, parseJson: boolean) => any;
    save: (key: string, data: any) => void;
    deleteItem: (key: string) => void;
    deleteAll: () => void;
}

class LocalStorage implements LocalStorage {
    get = (key: string, parseJson: boolean): any => {
        let data: any = localStorage.getItem(key) || null;
        if (data && parseJson) {
            data = JSON.parse(data);
        }
        return data;
    }
    save = (key: string, data: any) => {
        localStorage.setItem(key, JSON.stringify(data));
    }
    deleteItem = (key: string) => {
        localStorage.removeItem(key);
    }
    deleteAll = () => {
        localStorage.clear();
    }

}

export const AuthLocalStorage: LocalStorage = new LocalStorage();
