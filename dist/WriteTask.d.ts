import { WriteTags } from "./ExifTool";
import { ExifToolTask } from "./ExifToolTask";
export declare class WriteTask extends ExifToolTask<void> {
    readonly sourceFile: string;
    readonly args: string[];
    private constructor();
    static for(filename: string, tags: WriteTags, optionalArgs?: string[]): WriteTask;
    toString(): string;
    protected parse(data: string): void;
}
