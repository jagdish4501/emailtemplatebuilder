"use client";

import React, { useState, useEffect, useCallback } from "react";
interface DivNode {
  id: string;
  text: string;
  width: number;
  height: number;
  children: string[];
}

const createNode = (text: string, width = 700, height = 300): DivNode => ({
  id: Math.random().toString(36).substr(2, 9),
  text,
  width,
  height,
  children: [],
});

const DivTree: React.FC = () => {
  const [tree, setTree] = useState<DivNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<DivNode | null>(null);
  const [inputValues, setInputValues] = useState({
    text: "",
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const savedTree = localStorage.getItem("divTree");
    if (savedTree) {
      setTree(JSON.parse(savedTree));
    } else {
      setTree(createNode("Edit Text"));
    }
  }, []);

  useEffect(() => {
    if (tree) {
      localStorage.setItem("divTree", JSON.stringify(tree));
    }
  }, [tree]);

  useEffect(() => {
    setInputValues({
      text: selectedNode ? selectedNode.text : "",
      width: selectedNode ? selectedNode.width : 0,
      height: selectedNode ? selectedNode.height : 0,
    });
  }, [selectedNode]);

  const addDiv = (nodeId: string) => {
    if (!tree) return;
    const newNode = createNode("New Node");
    localStorage.setItem(newNode.id, JSON.stringify(newNode));
    const addNodeToTree=(node:)=>{

    }
  };

  const deleteDiv = (nodeId: string) => {};

  const renderTree = (node: DivNode, isRoot: boolean = false) => {
    return (
      <div
        key={node.id}
        className={`relative border border-red-500 p-4 group`}
        style={{ width: node.width, height: node.height }}
        onClick={(e) => {
          e.stopPropagation(); // Prevents the click from affecting parent nodes
          setSelectedNode(node);
        }}
      >
        <div
          className="absolute top-[-13px] right-1/2 cursor-pointer bg-green-400 opacity-0 group-hover:opacity-100"
          onClick={() => addDiv(node.id)}
        >
          +
        </div>
        {!isRoot && (
          <div
            className="absolute top-[-13px] left-0 cursor-pointer bg-red-600 rounded-full opacity-0 hover:opacity-100"
            onClick={() => deleteDiv(node.id)}
          >
            x
          </div>
        )}
        {node.text}

        <div className="flex flex-col p-1 m-1">
          {node.children.map((child) => renderTree(child))}
        </div>
      </div>
    );
  };

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const updateNode = useCallback(
    debounce(
      (
        nodeId: string,
        values: { text: string; width: number; height: number }
      ) => {
        if (!tree) return;
        const updateTree = (node: DivNode): DivNode => {
          if (node.id === nodeId) {
            return { ...node, ...values };
          }
          return { ...node, children: node.children.map(updateTree) };
        };
        setTree(updateTree(tree));
      },
      500
    ),
    [tree]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: name === "text" ? value : Number(value),
    }));

    if (selectedNode) {
      updateNode(selectedNode.id, {
        ...inputValues,
        [name]: name === "text" ? value : Number(value),
      });
    }
  };

  return (
    <div className="flex flex-row">
      {tree && <div className="w-2/3">{renderTree(tree, true)}</div>}
      <div>
        <input
          type="text"
          name="text"
          value={inputValues.text}
          onChange={handleInputChange}
          className="border border-green-400 ml-[20px] h-[50px] w-[400px]"
        />
        <input
          type="number"
          name="width"
          value={inputValues.width}
          onChange={handleInputChange}
          className="border border-green-400 ml-[20px] h-[50px] w-[400px]"
        />
        <input
          type="number"
          name="height"
          value={inputValues.height}
          onChange={handleInputChange}
          className="border border-green-400 ml-[20px] h-[50px] w-[400px]"
        />
      </div>
    </div>
  );
};

export default DivTree;
