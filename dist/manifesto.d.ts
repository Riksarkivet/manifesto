declare module Manifesto {
    class CanvasType {
        value: string;
        static CANVAS: CanvasType;
        constructor(value?: string);
        toString(): string;
        canvas(): CanvasType;
    }
}
declare module Manifesto {
    class ElementType {
        value: string;
        static DOCUMENT: ElementType;
        static MOVINGIMAGE: ElementType;
        static SOUND: ElementType;
        constructor(value?: string);
        toString(): string;
        document(): ElementType;
        movingimage(): ElementType;
        sound(): ElementType;
    }
}
declare module Manifesto {
    class RenderingFormat {
        value: string;
        static PDF: RenderingFormat;
        static DOC: RenderingFormat;
        static DOCX: RenderingFormat;
        constructor(value?: string);
        toString(): string;
        pdf(): RenderingFormat;
        doc(): RenderingFormat;
        docx(): RenderingFormat;
    }
}
declare module Manifesto {
    class ServiceProfile {
        value: string;
        static AUTOCOMPLETE: ServiceProfile;
        static CLICKTHROUGH: ServiceProfile;
        static LOGIN: ServiceProfile;
        static LOGOUT: ServiceProfile;
        static OTHERMANIFESTATIONS: ServiceProfile;
        static SEARCHWITHIN: ServiceProfile;
        static TOKEN: ServiceProfile;
        constructor(value?: string);
        toString(): string;
        autoComplete(): ServiceProfile;
        clickThrough(): ServiceProfile;
        login(): ServiceProfile;
        logout(): ServiceProfile;
        otherManifestations(): ServiceProfile;
        searchWithin(): ServiceProfile;
        token(): ServiceProfile;
    }
}
declare module Manifesto {
    class ViewingDirection {
        value: string;
        static LEFTTORIGHT: ViewingDirection;
        static RIGHTTOLEFT: ViewingDirection;
        static TOPTOBOTTOM: ViewingDirection;
        static BOTTOMTOTOP: ViewingDirection;
        constructor(value?: string);
        toString(): string;
        leftToRight(): ViewingDirection;
        rightToLeft(): ViewingDirection;
        topToBottom(): ViewingDirection;
        bottomToTop(): ViewingDirection;
    }
}
declare module Manifesto {
    class ViewingHint {
        value: string;
        static INDIVIDUALS: ViewingHint;
        static PAGED: ViewingHint;
        static CONTINUOUS: ViewingHint;
        static NONPAGED: ViewingHint;
        static TOP: ViewingHint;
        static NONE: ViewingHint;
        constructor(value?: string);
        toString(): string;
        individuals(): ViewingHint;
        paged(): ViewingHint;
        continuous(): ViewingHint;
        nonPaged(): ViewingHint;
        top(): ViewingHint;
        none(): ViewingHint;
    }
}
declare module Manifesto {
    interface IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;
        getLabel(): string;
        getProperty(name: string): any;
    }
}
declare module Manifesto {
    class JSONLDResource implements IJSONLDResource {
        context: string;
        id: string;
        __jsonld: any;
        private _label;
        constructor(jsonld: any);
        getManifest(): IManifest;
        getLabel(): string;
        getProperty(name: string): any;
    }
}
declare module Manifesto {
    class Canvas extends JSONLDResource implements ICanvas {
        ranges: IRange[];
        constructor(jsonld: any);
        getImageUri(): string;
        getRange(): IRange;
        getThumbUri(width: number, height: number): string;
        getType(): CanvasType;
        getWidth(): number;
        getHeight(): number;
    }
}
declare module Manifesto {
    class Element extends JSONLDResource implements IElement {
        type: ElementType;
        constructor(jsonld: any);
        getType(): ElementType;
    }
}
declare var _assign: any;
declare var _isArray: any;
declare module Manifesto {
    class Manifest extends JSONLDResource implements IManifest {
        options: IManifestoOptions;
        rootRange: IRange;
        sequences: Sequence[];
        treeRoot: TreeNode;
        constructor(jsonld: any, options?: IManifestoOptions);
        getAttribution(): string;
        getLocalisedValue(resource: any, locale?: string): string;
        getLogo(): string;
        getLicense(): string;
        getMetadata(includeRootProperties?: boolean): any;
        getRanges(): IRange[];
        getRangeById(id: string): IRange;
        getRangeByPath(path: string): IRange;
        getRendering(resource: IJSONLDResource, format: Manifesto.RenderingFormat | string): IRendering;
        getRenderings(resource: any): IRendering[];
        getSeeAlso(): any;
        getService(resource: IJSONLDResource, profile: Manifesto.ServiceProfile | string): IService;
        getServices(resource: any): IService[];
        getSequenceByIndex(sequenceIndex: number): ISequence;
        getTitle(): string;
        getTotalSequences(): number;
        getTree(): TreeNode;
        private _parseTreeNode(node, range);
        isMultiSequence(): boolean;
        loadResource(resource: IResource, clickThrough: (resource: IResource) => void, login: (loginService: string) => Promise<void>, getAccessToken: (tokenServiceUrl: string) => Promise<IAccessToken>, storeAccessToken: (resource: IResource, token: IAccessToken) => Promise<void>, getStoredAccessToken: (tokenService: string) => Promise<IAccessToken>, handleResourceResponse: (resource: IResource) => Promise<any>): Promise<any>;
        authorize(resource: IResource, clickThrough: (resource: IResource) => void, login: (loginService: string) => Promise<void>, getAccessToken: (tokenServiceUrl: string) => Promise<IAccessToken>, storeAccessToken: (resource: IResource, token: IAccessToken) => Promise<void>, getStoredAccessToken: (tokenService: string) => Promise<IAccessToken>): Promise<IResource>;
        loadResources(resources: IResource[], clickThrough: (resource: IResource) => void, login: (loginService: string) => Promise<void>, getAccessToken: (tokenServiceUrl: string) => Promise<IAccessToken>, storeAccessToken: (resource: IResource, token: IAccessToken) => Promise<void>, getStoredAccessToken: (tokenService: string) => Promise<IAccessToken>, handleResourceResponse: (resource: IResource) => Promise<any>): Promise<IResource[]>;
    }
}
declare module Manifesto {
    class Range extends JSONLDResource implements IRange {
        canvases: any[];
        parentRange: Range;
        path: string;
        ranges: Range[];
        treeNode: TreeNode;
        constructor(jsonld: any);
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
    }
}
declare module Manifesto {
    class Rendering extends JSONLDResource implements IRendering {
        constructor(jsonld: any);
        getFormat(): RenderingFormat;
    }
}
declare var _isNumber: any;
declare module Manifesto {
    class Sequence extends JSONLDResource implements ISequence {
        canvases: ICanvas[];
        constructor(jsonld: any);
        getCanvasById(id: string): ICanvas;
        getCanvasByIndex(canvasIndex: number): any;
        getCanvasIndexById(id: string): number;
        getCanvasIndexByLabel(label: string): number;
        getLastCanvasLabel(): string;
        getLastPageIndex(): number;
        getNextPageIndex(canvasIndex: number, pagingEnabled?: boolean): number;
        getPagedIndices(canvasIndex: number, pagingEnabled?: boolean): number[];
        getPrevPageIndex(canvasIndex: number, pagingEnabled?: boolean): number;
        getStartCanvasIndex(): number;
        getThumbs(width: number, height?: number): Manifesto.Thumb[];
        getStartCanvas(): string;
        getTotalCanvases(): number;
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
        isCanvasIndexOutOfRange(canvasIndex: number): boolean;
        isFirstCanvas(canvasIndex: number): boolean;
        isLastCanvas(canvasIndex: number): boolean;
        isMultiCanvas(): boolean;
        isPagingEnabled(): boolean;
        isTotalCanvasesEven(): boolean;
    }
}
declare var jmespath: any;
declare module Manifesto {
    class Deserialiser {
        static manifest: IManifest;
        static parse(manifest: string, options?: IManifestoOptions): IManifest;
        static parseSequences(): void;
        static parseCanvases(sequence: any): Canvas[];
        static parseRanges(r: any, path: string, parentRange?: Range): void;
        static getCanvasById(id: string): ICanvas;
    }
    class Serialiser {
        static serialise(manifest: Manifest): string;
    }
}
declare module Manifesto {
    class Service extends JSONLDResource implements IService {
        constructor(resource: any);
        getProfile(): ServiceProfile;
        getDescription(): string;
    }
}
declare module Manifesto {
    class Thumb {
        index: number;
        uri: string;
        label: string;
        width: number;
        height: number;
        visible: boolean;
        constructor(index: number, uri: string, label: string, width: number, height: number, visible: boolean);
    }
}
declare module Manifesto {
    class TreeNode {
        label: string;
        data: any;
        nodes: TreeNode[];
        selected: boolean;
        expanded: boolean;
        parentNode: TreeNode;
        constructor(label?: string, data?: any);
        addNode(node: TreeNode): void;
    }
}
declare var http: any;
declare var url: any;
declare module Manifesto {
    interface IAccessToken {
        accessToken: string;
        tokenType: string;
        expiresIn: number;
    }
}
declare module Manifesto {
    interface IAnnotation extends IJSONLDResource {
        getMotivation(): string;
    }
}
declare module Manifesto {
    interface ICanvas extends IJSONLDResource {
        getHeight(): number;
        getImageUri(): string;
        getRange(): IRange;
        getThumbUri(width: number, height: number): string;
        getType(): CanvasType;
        getWidth(): number;
        ranges: IRange[];
    }
}
declare module Manifesto {
    interface IElement extends IJSONLDResource {
        getType(): ElementType;
    }
}
declare module Manifesto {
    interface IManifest extends IJSONLDResource {
        getAttribution(): string;
        getLicense(): string;
        getLocalisedValue(resource: IJSONLDResource | string, locale?: string): string;
        getLogo(): string;
        getMetadata(includeRootProperties?: boolean): any;
        getRangeById(id: string): IRange;
        getRangeByPath(path: string): IRange;
        getRendering(resource: IJSONLDResource, format: RenderingFormat | string): IRendering;
        getRenderings(resource: any): IRendering[];
        getSeeAlso(): any;
        getSequenceByIndex(index: number): ISequence;
        getService(resource: IJSONLDResource, profile: ServiceProfile | string): IService;
        getServices(resource: any): IService[];
        getTitle(): string;
        getTotalSequences(): number;
        getTree(): TreeNode;
        isMultiSequence(): boolean;
        loadResource(resource: IResource, clickThrough: (resource: IResource) => void, login: (loginService: string) => Promise<void>, getAccessToken: (tokenServiceUrl: string) => Promise<IAccessToken>, storeAccessToken: (resource: IResource, token: IAccessToken) => Promise<void>, getStoredAccessToken: (tokenService: string) => Promise<IAccessToken>, handleResourceResponse: (resource: IResource) => Promise<any>): Promise<IResource>;
        loadResources(resources: IResource[], clickThrough: (resource: IResource) => void, login: (loginService: string) => Promise<void>, getAccessToken: (tokenServiceUrl: string) => Promise<IAccessToken>, storeAccessToken: (resource: IResource, token: IAccessToken) => Promise<void>, getStoredAccessToken: (tokenService: string) => Promise<IAccessToken>, handleResourceResponse: (resource: IResource) => Promise<any>): Promise<IResource[]>;
        options: IManifestoOptions;
        rootRange: IRange;
        sequences: ISequence[];
        treeRoot: TreeNode;
    }
}
interface IManifesto {
    load: (manifestUri: string, callback: (manifest: string) => void) => void;
    create: (manifest: string, options?: Manifesto.IManifestoOptions) => Manifesto.Manifest;
    CanvasType: Manifesto.CanvasType;
    ElementType: Manifesto.ElementType;
    RenderingFormat: Manifesto.RenderingFormat;
    ServiceProfile: Manifesto.ServiceProfile;
    ViewingDirection: Manifesto.ViewingDirection;
    ViewingHint: Manifesto.ViewingHint;
}
declare module Manifesto {
    interface IManifestoOptions {
        defaultLabel: string;
        locale: string;
        pessimisticAccessControl: boolean;
    }
}
declare module Manifesto {
    interface IRange extends IJSONLDResource {
        canvases: any[];
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
        parentRange: Range;
        path: string;
        ranges: Range[];
        treeNode: TreeNode;
    }
}
declare module Manifesto {
    interface IRendering extends IJSONLDResource {
        getFormat(): RenderingFormat;
    }
}
declare module Manifesto {
    interface IResource {
        clickThroughService: string;
        data: any;
        dataUri: string;
        error: any;
        isAccessControlled: boolean;
        loginService: string;
        logoutService: string;
        status: number;
        tokenService: string;
        getData(accessToken?: IAccessToken): Promise<IResource>;
    }
}
declare module Manifesto {
    interface ISequence extends IJSONLDResource {
        canvases: ICanvas[];
        getCanvasById(id: string): ICanvas;
        getCanvasByIndex(index: number): ICanvas;
        getCanvasIndexById(id: string): number;
        getCanvasIndexByLabel(label: string): number;
        getLastCanvasLabel(): string;
        getLastPageIndex(): number;
        getNextPageIndex(index: number): number;
        getPagedIndices(index: number): number[];
        getPrevPageIndex(index: number): number;
        getStartCanvas(): string;
        getStartCanvasIndex(): number;
        getThumbs(width: number, height: number): Manifesto.Thumb[];
        getTotalCanvases(): number;
        getViewingDirection(): Manifesto.ViewingDirection;
        getViewingHint(): Manifesto.ViewingHint;
        isCanvasIndexOutOfRange(index: number): boolean;
        isFirstCanvas(index: number): boolean;
        isLastCanvas(index: number): boolean;
        isMultiCanvas(): boolean;
        isPagingEnabled(): boolean;
        isTotalCanvasesEven(): boolean;
    }
}
declare module Manifesto {
    interface IService extends IJSONLDResource {
        getProfile(): ServiceProfile;
    }
}
