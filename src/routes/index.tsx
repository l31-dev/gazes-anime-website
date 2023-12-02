import "./index.css";
import { Html } from "solid-start";

export default function Home() {
    let modalRef: HTMLDialogElement | undefined;

    function handleKeydown(e: KeyboardEvent) {
        if (e.ctrlKey && e.key == "k") {
            e.preventDefault();
            modalRef?.showModal();
        }
    }

    let searchInputRef: HTMLInputElement | undefined;
    async function handleSearch(e: KeyboardEvent) {
        const temp = searchInputRef?.value;

        if (
            !(await new Promise((resolve) => {
                setTimeout(() => {
                    if (temp === searchInputRef?.value) resolve(true);
                    else resolve(false);
                }, 500);
            }))
        )
            return;

        console.log("RECHERCHE EN COURS");
    }

    return (
        <Html onKeyDown={handleKeydown}>
            <main onKeyDown={handleKeydown}>
                <dialog class={"bg-zinc-900 text-white w-[50vw]"} onClick={(e) => e.target === modalRef && modalRef.close()} ref={modalRef}>
                    <search>
                        <label for="anime" class={"flex gap-2 p-3 px-5 placeholder-zinc-400 w-full"}>
                            <i class={"ri-search-line text-zinc-400"}></i>
                            <input onKeyDown={handleSearch} ref={searchInputRef} placeholder={"Rechercher un anime"} class={"bg-transparent w-full outline-none"} type="search" id={"anime"} />
                        </label>
                        <div></div>
                    </search>
                </dialog>

                <button onClick={() => modalRef?.showModal()}>Show the dialog</button>
            </main>
        </Html>
    );
}
