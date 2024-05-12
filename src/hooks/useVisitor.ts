import { useEffect, useState } from "react";

import fingerprint from "@fingerprintjs/fingerprintjs";

const fp = fingerprint.load();

export const useVisitor = () => {
    const [visitorId, setVisitorId] = useState<string | undefined>(undefined);

    useEffect(() => {
        fp.then((fp) => {
            return fp.get();
        }).then((result) => {
            setVisitorId(result.visitorId);
        });
    }, []);

    return { visitorId };
};
