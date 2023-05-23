export default function bubble_sort(
	arr: number[]
): void {
	let end = arr.length;
	while(end > 1) {
		for (let i = 0; i < end; i++) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
			}
		}
		end--;
	}
}
